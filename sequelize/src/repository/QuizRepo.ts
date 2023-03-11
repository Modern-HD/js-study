import Dept from "../interface/Dept";
import Emp from "../interface/Emp";
import dept from "../orm/models/dept";
import emp from "../orm/models/emp";

interface QuizRepo {
    [key: string]: () => Promise<any>
}

const quizRepo: QuizRepo = {
    quiz1: async () => {
        const result = await emp.findAll({
            attributes: ['ename'],
            where: {
                job: 'CLERK'
            }
        })
        return result.map(el => el.toJSON()) as Pick<Emp, 'ename'>[]
    },
    quiz2: async () => {
        const result = await dept.findAll({
            attributes: ['dname', 'deptNo'],
            where: {
                loc: 'DALLAS'
            }
        })
        return result.map(el => el.toJSON()) as Pick<Dept, 'dname' | 'deptNo'>[]
    },
    quiz3: async () => {
        const result = await emp.findAll({
            attributes: ['ename', 'deptNo'],
            where: {
                comm:null
            }
        })
        return result.map(el => el.toJSON()) as Pick<Emp, 'ename' | 'deptNo'>[]
    }
}

export default quizRepo;