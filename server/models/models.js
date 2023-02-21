const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    tag: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Device_Info = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.STRING, allowNull: false},
    description : {type: DataTypes.STRING, allowNull: false},
    redirect_url: {type: DataTypes.STRING}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type: DataTypes.STRING, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('typebrand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Device.hasMany(Device_Info)
Device_Info.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(Rating)
Rating.belongsTo(Device)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User,
    Basket,
    BasketDevice,
    Brand,
    Type,
    Device,
    Device_Info,
    Rating
}