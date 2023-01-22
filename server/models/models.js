const sequelize = require('../db_connect')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	passwd: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Cart = sequelize.define('cart', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const CartDetails = sequelize.define('cart_details', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Product = sequelize.define('product', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	rating: { type: DataTypes.INTEGER },
	img: { type: DataTypes.STRING },
})

const Category = sequelize.define('category', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	cat_name: { type: DataTypes.STRING, allowNull: false, unique: true },
})

const Brand = sequelize.define('brand', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	brand_name: { type: DataTypes.STRING, allowNull: false, unique: true },
})

const Rating = sequelize.define('rating', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	rate: { type: DataTypes.INTEGER },
})

const ProductInfo = sequelize.define('product_info', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false },
})

const CategoryBrand = sequelize.define('category_brand', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Cart.hasMany(CartDetails)
CartDetails.belongsTo(Cart)

Category.hasMany(Product)
Product.belongsTo(Category)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(CartDetails)
CartDetails.belongsTo(Product)

Product.hasMany(ProductInfo, { as: 'info' })
ProductInfo.belongsTo(Product)

Category.belongsTo(Brand, { through: CategoryBrand })
Brand.belongsTo(Category, { through: CategoryBrand })

module.exports = {
	User, Cart, CartDetails, Rating, Product, ProductInfo, Brand, Category, CategoryBrand
}