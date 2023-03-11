import { DataTypes } from "sequelize";
import { sequelize } from "./";

const emp = sequelize.define('emp', {
    empNo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ename: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    job: {
        type: DataTypes.STRING(9),
    },
    mgr: {
        type: DataTypes.INTEGER
    },
    hireAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    sal: {
        type: DataTypes.DOUBLE
    },
    comm: {
        type: DataTypes.DOUBLE
    },
    deptNo: {
        type: DataTypes.INTEGER
    }
}, {
    underscored: true,
    freezeTableName: true,
    timestamps: false
})

export default emp;