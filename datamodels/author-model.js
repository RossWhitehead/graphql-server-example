
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('author', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		tableName: 'author',
		timestamps: false
	})
}