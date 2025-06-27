import fs from 'fs'
import path from 'path'
import { exec, spawn } from 'child_process'
import * as THREE from 'three'
import { MTLLoader, OBJLoader } from 'three/examples/jsm/Addons.js'

const outProjectPath = `./public/output/`
const inputProjectPath = `./public/input/`

const Project = {
    name: 'MFZ',
    inputPath: '',
    outPutPath: ''
}

// 获取file的父级，若不存在则创建
function getOrCreatePath(file) {
    const dir = path.dirname(file)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
    return file
}

/**
 * 
 * @param {string} inputFile
 * 需要操作的全景图片文件的完整路径
 * @param {string} outputPath 
 * 操作后数据的输出位置的完整路径
 */
async function convertPanoImage(inputFile, outputDir) {
    const panoInfo = inputFile.split('/')
    const panoName = panoInfo[panoInfo.length - 1].replace('.jpg', '')

    return new Promise((resovle, reject) => {
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })
        const process = exec(`"tools/sphere2cube.exe" -i ${inputFile} -o ${outputDir}/${panoName} -itemSize 2048`)

        process.once('exit', () => {
            const files = fs.readdirSync(`${outputDir}/${panoName}`, { withFileTypes: true })
            for(let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.name == 'mob_f.jpg') {
                    fs.renameSync(`${outputDir}/${panoName}/mob_f.jpg`, `${outputDir}/${panoName}_front.jpg`)
                } else if (file.name == 'mob_b.jpg') {
                    fs.renameSync(`${outputDir}/${panoName}/mob_b.jpg`, `${outputDir}/${panoName}_back.jpg`)
                } else if (file.name == 'mob_l.jpg') {
                    fs.renameSync(`${outputDir}/${panoName}/mob_l.jpg`, `${outputDir}/${panoName}_left.jpg`)
                } else if (file.name == 'mob_r.jpg') {
                    fs.renameSync(`${outputDir}/${panoName}/mob_r.jpg`, `${outputDir}/${panoName}_right.jpg`)
                } else if (file.name == 'mob_u.jpg') {
                    fs.renameSync(`${outputDir}/${panoName}/mob_u.jpg`, `${outputDir}/${panoName}_up.jpg`)
                } else if (file.name == 'mob_d.jpg') {
                    fs.renameSync(`${outputDir}/${panoName}/mob_d.jpg`, `${outputDir}/${panoName}_down.jpg`)
                } else {
                    fs.rmSync(`${outputDir}/${panoName}/${file.name}`)
                }
            }
            fs.rmSync(`${outputDir}/${panoName}`, {recursive: true, force: true})
            resovle()
        })
        process.once('error', error => reject(error))
    })
}

/**
 * 
 * @param {string} inputCameraFile
 * 相机位姿信息文件的路径 
 * @param {string} outPanoramaFile 
 * 封装好信息的文件的存储路径
 */
function convertCameraPos(inputCameraFile, outPanoramaFile) {
    const parmText = fs.readFileSync(inputCameraFile).toString()
    const panos = parmText.split("\n")
        .filter(line => line.length > 0)
        .filter(line => line.search("timestamp") == -1)
        .map(p => {
            const pattern = p.split(/\s+/)

            const name = pattern[1]
            const entryName = name.replace(".jpg", "")

            const quat = new THREE.Quaternion()
                .set(Number(pattern[5]),
                    Number(pattern[7]),
                    -Number(pattern[6]),
                    Number(pattern[8]))

            quat.multiply(new THREE.Quaternion().setFromUnitVectors(
                new THREE.Vector3(0,0, 1),
                new THREE.Vector3(0, 0, -1)
            ))

            //Z-up => Y-up
            const quaternion = {
                x: quat.x,
                y: quat.y,
                z: quat.z,
                w: quat.w
            }
            const position = [Number(pattern[2]), Number(pattern[4]), -Number(pattern[3])]
            const standing_position = [Number(pattern[2]), Number(pattern[4]) - 1.5, -Number(pattern[3])]

            const pano = {
                name: entryName,
                floor_index: 0,
                position: position,
                quaternion: quaternion,
                standing_position: standing_position,
                visible_nodes: [],
                front: `images/cube2048/${entryName}/front.jpg`,
                back: `images/cube2048/${entryName}/back.jpg`,
                up: `images/cube2048/${entryName}/up.jpg`,
                down: `images/cube2048/${entryName}/down.jpg`,
                left: `images/cube2048/${entryName}/left.jpg`,
                right: `images/cube2048/${entryName}/right.jpg`
            }

            return pano
        })

    const panoFile = getOrCreatePath(outPanoramaFile)
    fs.writeFileSync(panoFile, JSON.stringify(panos))
}

/**
 * 大势设备的数据转换
*/
async function main() {
    //panorama.json
    console.time("Convert CameraPosition")
    convertCameraPos(`${Project.inputCameraPosFile}`, `${outProjectPath}/${Project.name}/panorama.json`)
    console.timeEnd("Convert CameraPosition")

    //Panos
    console.time("Convert Pano")
    const panoFileList = fs.readdirSync(Project.inputPanoPath, { withFileTypes: true })
    for  (let i = 0; i < panoFileList.length; i++) {

        const panoFile = panoFileList[i];
        const panoName = panoFile.name.replace('.jpg', '')

        await convertPanoImage(`${panoFile.parentPath}/${panoFile.name}`, `${outProjectPath}/${Project.name}/images/cube2048/${panoName}` )
            .catch(e=> {

                console.error(e)

            })

        console.log(`Convert Pano ${(i + 1)}/${panoFileList.length}`)
    }
    console.timeEnd("Convert Pano")

    //Mesh


    console.log("Covnert Complete")


}
// main()

/**
 * GOSLAM设备M40的位姿信息转换
 * */ 
async function convertMFZ() {
    const vecX = new THREE.Vector3(1, 0, 0)
    const vecY = new THREE.Vector3(0, 1, 0)
    const vecZ = new THREE.Vector3(0, 0, 1)

    const parmText = fs.readFileSync('./public/output/MFZ/3/pose.txt').toString()
    const panos = parmText.split("\n")
        .filter(line => line.length > 0)
        .map(p => {
            const pattern = p.split(/\s+/)
            const entryName = pattern[0]

            // const quatX = new THREE.Quaternion().setFromAxisAngle(vecX, -Number(pattern[5]))
            // const quatY = new THREE.Quaternion().setFromAxisAngle(vecY, -Number(pattern[6]))
            // const quatZ = new THREE.Quaternion().setFromAxisAngle(vecZ, -Number(pattern[7]))
            // const quat = quatX.multiply(quatY).multiply(quatZ)
            // const quat = quatZ.multiply(quatY).multiply(quatX)
            // quat.invert()

            // const roll = Number(pattern[5])
            // const pitch = Number(pattern[6])
            // const yaw = Number(pattern[7])
            // // 计算四元数分量
            // const cr = Math.cos(roll * 0.5);
            // const sr = Math.sin(roll * 0.5);
            // const cp = Math.cos(pitch * 0.5);
            // const sp = Math.sin(pitch * 0.5);
            // const cy = Math.cos(yaw * 0.5);
            // const sy = Math.sin(yaw * 0.5);

            // const w = cr * cp * cy + sr * sp * sy;
            // const x = sr * cp * cy - cr * sp * sy;
            // const y = cr * sp * cy + sr * cp * sy;
            // const z = cr * cp * sy - sr * sp * cy;

            // const quat = new THREE.Quaternion().set(x, y, z, w)

            const euler = new THREE.Euler(Number(pattern[5]), Number(pattern[7]), Number(pattern[6]), 'ZYX')
            const quat = new THREE.Quaternion().setFromEuler(euler)

            quat.multiply(new THREE.Quaternion().setFromUnitVectors(
                new THREE.Vector3(1, 0, 0),
                new THREE.Vector3(0, 0, -1)
            ))

            const quaternion = {
                x: quat.x,
                y: quat.y,
                z: quat.z,
                w: quat.w
            }
            const position = [Number(pattern[2]), Number(pattern[4]), -Number(pattern[3])]
            const standing_position = [Number(pattern[2]), Number(pattern[4]) - 1.5, -Number(pattern[3])]

            const pano = {
                name: entryName,
                floor_index: 0,
                position: position,
                quaternion: quaternion,
                standing_position: standing_position,
                visible_nodes: [],
                front: `images/cube2048/${entryName}/front.jpg`,
                back: `images/cube2048/${entryName}/back.jpg`,
                up: `images/cube2048/${entryName}/up.jpg`,
                down: `images/cube2048/${entryName}/down.jpg`,
                left: `images/cube2048/${entryName}/left.jpg`,
                right: `images/cube2048/${entryName}/right.jpg`
            }

            return pano
        })

    const panoFile = getOrCreatePath('./public/output/MFZ/3/panorama.json')
    fs.writeFileSync(panoFile, JSON.stringify(panos))
}
// convertMFZ()

/**
 * GOSLAM设备M40的全景图片的转换
*/
async function MFZPano() {
    const panoFileList = fs.readdirSync(`./public/output/MFZ/images`, { withFileTypes: true })

    for(let i = 0; i < panoFileList.length; i++) {
        const panoFile = panoFileList[i];
        await convertPanoImage(`${panoFile.parentPath}/${panoFile.name}`, `${outProjectPath}/MFZ/convert`)
        .catch(e=> {
            console.error(e)
        })
    }
}
MFZPano()