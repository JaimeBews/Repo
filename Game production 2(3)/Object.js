function Object(img, x, y, w, h)
		{
			this.Sprite = new Image;
			this.Sprite.src = img;
			this.X = x;
			this.Y = y;
			this.W = w;
			this.H = h;
			
			this.isCollRight= function(obj){
				if (obj.X > this.X + this.W) return false;//objects left is further right than this's right side
				if (obj.X + obj.W < this.X+this.W)return false//objects right side is further left than this's left side
				if (obj.Y > this.Y + this.H-15)return false;//this's bottom
				if (obj.Y + obj.H < this.Y+15)return false;
				return true;
			}
			this.isCollLeft= function(obj){
				if (obj.X > this.X ) return false;//objects left is further right than this's right side
				if (obj.X + obj.W < this.X)return false//objects right side is further left than this's left side
				if (obj.Y > this.Y + this.H-15)return false;
				if (obj.Y + obj.H < this.Y+15)return false;
				return true;
			}
			this.isCollTop = function(obj)
			{
				if (obj.X > this.X + this.W-8) return false;
				if (obj.X + obj.W < this.X+8)return false;
				if (obj.Y > this.Y )return false;//obj top lower than this top
				if (obj.Y + obj.H < this.Y)return false;//obj bottom is higher than this top
				return true;
			}
			
			this.isCollBot = function(obj)
			{
				if (obj.X > this.X + this.W-8) return false;
				if (obj.X + obj.W < this.X+8)return false;
				if (obj.Y > this.Y + this.H)return false;
				if (obj.Y + obj.H < this.Y+this.H-5)return false;
				return true;
			}
			this.isColl = function(obj)
			{
				if (obj.X > this.X + this.W) return false;
				if (obj.X + obj.W < this.X)return false;
				if (obj.Y > this.Y + this.H)return false;
				if (obj.Y + obj.H < this.Y)return false;
				return true;
			}
			
		}