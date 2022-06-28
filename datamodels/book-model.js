module.exports = function(sequelize, DataTypes) {
	return sequelize.define('book', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		authorId: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'book',
		timestamps: false
	})
}