import * as THREE from 'three'
import axios from 'axios'

import { Template } from './sun/Template'
import { Sun } from './sun/Sun';

class Main {
    constructor() {
        // const template = new Template(".template", false);
        // template.init();

        const sun = new Sun(".template", false)
        sun.init()
    }

    main() {}
}

new Main()
