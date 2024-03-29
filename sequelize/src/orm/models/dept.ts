import { DataTypes } from "sequelize";
import { sequelize } from "./";
import emp from "./emp";

const dept = sequelize.define('dept', {
    deptNo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    dname: {
        type: DataTypes.STRING(14),
        allowNull: false
    },
    loc: {
        type: DataTypes.STRING(13),
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true,
    timestamps: false
})

dept.hasMany(emp, { foreignKey: 'deptNo' });
emp.belongsTo(dept, { foreignKey: 'deptNo' });

export default dept;