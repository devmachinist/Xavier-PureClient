//THIS IS A GENERATED FILE - Do not alter
export class CarouselItem {
  constructor(){
     this.Id= {}
     this.description= {}
     this.listName= {}
     this.src= {}
     this.title= {}
} }

export class CarouselItemButton {
  constructor(){
     this.Id= {}
     this.ButtonListId= {}
     this.ButtonName= {}
     this.CarouselItemId= {}
     this.iconClass= {}
     this.innerIcon= {}
     this.onclick= {}
     this.style= {}
     this.text= {}
} }

export class Engine {
  constructor(){
     this.Id= {}
} }

export class Game {
  constructor(){
     this.Id= {}
} }

export class Order {
  constructor(){
     this.OrderId= {}
     this.BuyerId= {}
     this.OrderDate= {}
     this.SellerId= {}
     this.Shipping= {}
     this.Subtotal= {}
     this.Tax= {}
     this.Total= {}
} }

export class Product {
  constructor(){
     this.Id= {}
     this.Description= {}
     this.IsSubscription= {}
     this.Media= {}
     this.Name= {}
     this.OrderId= {}
     this.Price= {}
     this.ShopId= {}
} }

export class Shop {
  constructor(){
     this.Id= {}
     this.PaymentOptions= {}
     this.StoreName= {}
} }

export class Transaction {
  constructor(){
     this.TransactionId= {}
     this.IsPaid= {}
     this.OrderId= {}
     this.PaymentType= {}
     this.ProductId= {}
     this.ShopId= {}
} }

export class User {
  constructor(){
     this.Id= {}
     this.AccessFailedCount= {}
     this.ConcurrencyStamp= {}
     this.Email= {}
     this.EmailConfirmed= {}
     this.LockoutEnabled= {}
     this.LockoutEnd= {}
     this.NormalizedEmail= {}
     this.NormalizedUserName= {}
     this.PasswordHash= {}
     this.PhoneNumber= {}
     this.PhoneNumberConfirmed= {}
     this.SecurityStamp= {}
     this.TwoFactorEnabled= {}
     this.UserName= {}
} }

export const Products = [];
export const Users = [];
export const Shops = [];
export const Transactions = [];
export const Orders = [];
export const Games = [];
export const Engines = [];
export const CarouselItems = [];
export const Path = [];
export const Database = [];
export const ChangeTracker = [];
export const Model = [];
export const ContextId = [];
//JavaScript code generated from EF Core values and methods for the ShopLite
export function GetProducts(){
	 return Products; 
}

export function SetProducts(value){
	 Products = value; 
}

export function GetUsers(){
	 return Users; 
}

export function SetUsers(value){
	 Users = value; 
}

export function GetShops(){
	 return Shops; 
}

export function SetShops(value){
	 Shops = value; 
}

export function GetTransactions(){
	 return Transactions; 
}

export function SetTransactions(value){
	 Transactions = value; 
}

export function GetOrders(){
	 return Orders; 
}

export function SetOrders(value){
	 Orders = value; 
}

export function GetGames(){
	 return Games; 
}

export function SetGames(value){
	 Games = value; 
}

export function GetEngines(){
	 return Engines; 
}

export function SetEngines(value){
	 Engines = value; 
}

export function GetCarouselItems(){
	 return CarouselItems; 
}

export function SetCarouselItems(value){
	 CarouselItems = value; 
}

export function GetPath(){
	 return Path; 
}

export function SetPath(value){
	 Path = value; 
}

export function GetDatabase(){
	 return Database; 
}

export function SetDatabase(value){
	 Database = value; 
}

export function GetChangeTracker(){
	 return ChangeTracker; 
}

export function SetChangeTracker(value){
	 ChangeTracker = value; 
}

export function GetModel(){
	 return Model; 
}

export function SetModel(value){
	 Model = value; 
}

export function GetContextId(){
	 return ContextId; 
}

export function SetContextId(value){
	 ContextId = value; 
}

Array.prototype.Where = function(predicate){
	 var result = [];
	 for(var i=0; i < this.length; i++){
	 	 if(predicate(this[i])){
	 	 	 result.push(this[i]);
	 	 }
	 }
	 return result;
}

Array.prototype.SingleOrDefault = function(predicate){
	 for(var i=0; i < this.length; i++){
	 	 if(predicate(this[i])){
	 	 	 return this[i];
	 	 }
	 }
	 return null;
}

Array.prototype.ToList = function(){
	 return this;
}

Array.prototype.SaveChanges = function(){const sql = require('sqlite3');
	     ChangeTracker.forEach(object => {
        Object.keys(object).forEach(key => {
            let value = object[key];
            let query = `update ${key} set value = '${value}'`;
               async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(connect)
        const result = await sql.query`${query}`
        console.dir(result)
    } catch (err) {
        console.log(err)
    }
        }
    });
})  }

Array.prototype.Add = function(entity){
	 this.push(entity);
}

Array.prototype.Remove = function(entity){
	 var index = this.indexOf(entity);
	 this.splice(index,1);
}

Array.prototype.Update = function(entity){
	 var index = this.indexOf(entity);
	 this[index] = entity;
}

Array.prototype.Map = function(callback) {
  const result = [];
            for (let item of this)
            {
                result.push(callback(item));
            }
            return result.join('');
        };
