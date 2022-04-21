create table help_center(
Id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
OrderNo varchar(20),
ProductDetails varchar(500),
ProblemType varchar(100),
Descriptions varchar(2000)
	
)


CREATE TABLE public."Productpages" (
    id integer NOT NULL,
    "productId" integer,
    "productName" character varying(255),
    "productPrice" integer,
    "productImage" character varying(255),
    "productDescription" character varying(255)
);

-- Table: public.checkout

-- DROP TABLE public.checkout;

CREATE TABLE public.checkout
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default",
    price integer,
    CONSTRAINT id PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.checkout
    OWNER to postgres;

-- Table: public.shopping_cart

-- DROP TABLE public.shopping_cart;

CREATE TABLE public.shopping_cart
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default",
    price integer,
    CONSTRAINT shopping_cart_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.shopping_cart
    OWNER to postgres;

    INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('1', '10191', 'Red Fit', '500', 'assets/images/Red_Fit.jpg', 'Casual wear for Mens.Regular fit,100% Cotton.Machine wah with similar colours.');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('2', '10195', 'Men Black Tshirt', '499', 'assets/images/men black tshirt.jpg', 'Casual wear for Mens.Fabric Type:Cotton.wash care:Do not bleach.Sleeve Type: Half Sleeve');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('3', '10199', 'Men Blue Shirt', '699', 'assets/images/men blue shirt.jpg', 'Casual wear for Mens.Material:Cotton blue shirt with lines.It is stylish and warm.');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('4', '11222', 'Men Polo Tshirt', '740', 'assets/images/men polo tshirt.jpg', 'Casual wear for Mens.Material composition: 100% cotton Style: polo.Neck style :Turtle Neck.Pattern:Striped');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('5', '11235', 'women denim dress', '700', 'assets/images/women denim dress.jpg ', 'Party Wear for Womens.Material composition:Denim.Pattern:Solid.Neck Style:Round Neck .Wash Care:Machine Wash');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('6', '11240', 'women hoodie', '800',  'assets/images/women hoodie.jpg', '1.Material composition: cotton.2.Style:Regular.3.Neck style:Hooded Neck.4.Pattern:Graphic.5.Best Fashionably comfortable that you have wore till now,Fabric is so soft over the skin.');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('7', '11245', 'women polo tshirt', '599', 'assets/images/women polo tshirt.jpg', '1.Material Composition:100% organic cotton.2.Color:blue with white lines.3.Style:polo.4.Sleeve Type:Half.5.Fit type:Regular.6.Smooth fabric,elegant stitching.');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('8', '11300', 'women shirt', '500', ' assets/images/women shirt.jpg', '1.Material composition:100% viscose.2.Style:Regular.3.Color:Pink & Grey.4.Full Sleeve with Button Flap.5.Soft,Brathable,Easy to Wash.');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('9', '11302', 'Girl dungaree', '400', ' assets/images/girl dungaree.jpg ', ' 1.Material Composition:50%denim.2.Style:A-Line.3.Pattern:Stripped.4.Care Instructions:Dry clean only.5.Age range description:Kid;Sleeve Type:Half Sleeve.');
	
	INSERT INTO public."Productpages"(
	id, "productId", "productName", "productPrice", "productImage", "productDescription")
	VALUES ('10', '11305', 'Boys Blazer', '600', 'assets/images/boys blazer.jpg ', '1.Material:Cotton 2.Style:Casual wear for 5-6 year kids.3.Care Instructions:Machine Wash.4.This stylish complete party clothing set with fashionable look.');
	


	INSERT INTO public.shopping_cart( name, price)
	VALUES ('Red Fit',500);
	
	INSERT INTO public.shopping_cart(
	 name, price)
	VALUES ( 'Men Black Tshirt', '500');
	
	INSERT INTO public.shopping_cart(
	 name, price)
	VALUES ( 'Men Blue Shirt', '500');
	
	INSERT INTO public.shopping_cart(
	 name, price)
	VALUES ( 'Men Polo Tshirt', '500');
	
	INSERT INTO public.shopping_cart(
	 name, price)
	VALUES ( 'Women denim dress', '500');






	INSERT INTO public.checkout( name, price)
	VALUES ('Red Fit',500);
	
	INSERT INTO public.checkout(
	 name, price)
	VALUES ( 'Men Black Tshirt', '500');
	
	INSERT INTO public.checkout(
	 name, price)
	VALUES ( 'Men Blue Shirt', '500');
	
	INSERT INTO public.checkout(
	 name, price)
	VALUES ( 'Men Polo Tshirt', '500');
	
	INSERT INTO public.checkout(
	 name, price)
	VALUES ( 'Women denim dress', '500');