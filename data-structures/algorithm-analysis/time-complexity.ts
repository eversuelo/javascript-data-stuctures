class TimeComplexity {

    constructor(loopCount: number, nestedLoopCount: number = 0) {
        this.singleLoop(loopCount, nestedLoopCount);
    }
    /**
     * 
     * @param loopCount 
     * @description A single loop is a Linear Time Complexity O(n)
     * @returns number of iterations
     */
    singleLoop(loopCount: number) {
        let m: number = 0;
        for (let i = 0; i < 10; i++) {
            m++;
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Quadratic Time Complexity O(n^2)
     * @returns number of iterations
     */
    twoLoops(loopCount: number) {
        let m: number = 0;
        for (let i = 0; i < loopCount; i++) {
            for (let j = 0; j < loopCount; j++) {
                m++;
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Cubic Time Complexity O(n^3)
     * @returns number of iterations
     */
    threeLoops(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {      // 0 hasta n-1
            for (let j = 0; j < loopCount; j++) {    // 0 hasta n-1
                for (let k = 0; k < loopCount; k++) {  // 0 hasta n-1
                    m += 1;
                }
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Cubic Time Complexity O(n^3)
     * @returns number of iterations
     */
    threeLoopsDependent(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {      // 0 hasta n-1
            for (let j = i; j < loopCount; j++) {    // i hasta n-1 (comienza en i)
                for (let k = j + 1; k < loopCount; k++) {  // j+1 hasta n-1 (comienza después de j)
                    m += 1;
                }
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Quadratic Time Complexity O(n^2)
     * @returns number of iterations
     */
    arithmeticalProgression(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {
            for (let j = 0; j < i; j++) {
                m += 1;
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Inverse Arithmetical Progression Time Complexity O(n^2)
     * @returns number of iterations
     */
    inverseArithmeticalProgression(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {
            for (let j = i; j > 0; j--) {
                m += 1;
            }
        }
        return m;
    }
    geometricProgression(loopCount: number) {
        let m = 0;
        for (let i = 1; i < loopCount; i++) {
            for (let j = 0; j <= i; j++) {
                m += 1;
            }
        }
        return m;
    }
}
class TimeComplexity {

    constructor(loopCount: number, nestedLoopCount: number = 0) {
        this.singleLoop(loopCount, nestedLoopCount);
    }
    /**
     * 
     * @param loopCount 
     * @description A single loop is a Linear Time Complexity O(n)
     * @returns number of iterations
     */
    singleLoop(loopCount: number) {
        let m: number = 0;
        for (let i = 0; i < 10; i++) {
            m++;
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Quadratic Time Complexity O(n^2)
     * @returns number of iterations
     */
    twoLoops(loopCount: number) {
        let m: number = 0;
        for (let i = 0; i < loopCount; i++) {
            for (let j = 0; j < loopCount; j++) {
                m++;
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Cubic Time Complexity O(n^3)
     * @returns number of iterations
     */
    threeLoops(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {      // 0 hasta n-1
            for (let j = 0; j < loopCount; j++) {    // 0 hasta n-1
                for (let k = 0; k < loopCount; k++) {  // 0 hasta n-1
                    m += 1;
                }
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Cubic Time Complexity O(n^3)
     * @returns number of iterations
     */
    threeLoopsDependent(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {      // 0 hasta n-1
            for (let j = i; j < loopCount; j++) {    // i hasta n-1 (comienza en i)
                for (let k = j + 1; k < loopCount; k++) {  // j+1 hasta n-1 (comienza después de j)
                    m += 1;
                }
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Quadratic Time Complexity O(n^2)
     * @returns number of iterations
     */
    arithmeticalProgression(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {
            for (let j = 0; j < i; j++) {
                m += 1;
            }
        }
        return m;
    }
    /**
     * 
     * @param loopCount 
     * @description A nested loop is a Inverse Arithmetical Progression Time Complexity O(n^2)
     * @returns number of iterations
     */
    inverseArithmeticalProgression(loopCount: number) {
        let m = 0;
        for (let i = 0; i < loopCount; i++) {
            for (let j = i; j > 0; j--) {
                m += 1;
            }
        }
        return m;
    }
    geometricProgression(loopCount: number) {
        let m = 0;
        for (let i = 1; i < loopCount; i++) {
            for (let j = 0; j <= i; j++) {
                m += 1;
            }
        }
        return m;
    }
}
