import { QueryTypes } from "sequelize";
import Dept from "../interface/Dept";
import Emp from "../interface/Emp";
import { sequelize } from "../orm/models";
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
    },
    quiz4: async () => {
        const result = await emp.findAll({
            attributes: ['ename',
                [sequelize.literal('dept.dname'), 'dname']
            ],
            include: [
                {
                    model: dept,
                    where: {
                        dname: 'SALES'
                    },
                    attributes: [],
                }
            ],
        });
        return result.map(el => el.toJSON()) as Pick<Emp & Dept, 'ename' | 'dname'>[];
    },
    quiz5: async () => {
        const result = await sequelize.query(`
            SELECT a.ename, b.dname
            FROM emp a
            JOIN dept b
            ON a.dept_no = b.dept_no
            WHERE b.dname = :dname
        `, {
            replacements: {
                dname: 'SALES'
            },
            type: QueryTypes.SELECT
        })
        return result as Pick<Emp & Dept, 'ename' | 'dname'>[];
    }
}

export default quizRepo;