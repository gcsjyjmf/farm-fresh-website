-- For MySql database
-- The following people have worked on this file:
-- Lei Li database setup
-- Justin Mountains product data
create
database web_team_work;

DROP TABLE IF EXISTS `t_product`;
create table web_team_work.t_product
(
    id serial
    comment 'product id',
    name           varchar
    (128)                            not null comment 'product name',
    fruitveg       smallint      default 0                 not null comment 'fruit or veg, 0: fruit; 1: veg',
    description    varchar
    (1024) default ''                not null comment 'description',
    organic        smallint      default 0                 not null comment 'organic, 0: not organic; 1: yes',
    price_cents    bigint        default 1000000           not null comment 'product price in cents',
    image_location varchar
    (1024)                           not null comment 'image location',
    invalid        smallint      default 0                 not null comment 'invalid item, 0: valid; 1: invalid',
    operation_time timestamp     default CURRENT_TIMESTAMP not null comment 'the date time that the record inserted or updated',
    constraint pk_product_id
        primary key
    (id)
) engine = innodb;

    insert into t_product
        (name, fruitveg, description, price_cents, organic, image_location)
    values
        ('Organic Watermelon', 0,
            'These sweet and juicy watermelons are organically grown and ready for pickup.', 119,
            1, 'images/organic_watermelon.png'),
        ('Organic Apples', 0, 'Organic apples are crisp and sweet with just a hint of sour.', 899, 1,
            'images/organic_apple.png'),
        ('Organic Peaches', 0, 'Our organic peaches are the perfect fit for your summer picnic.',
            849, 1, 'images/organic_peach.png'),
        ('Watermelon', 0,
            'Nothing can make you feel as refreshed on a hot summer''s day than a slice of watermelon!',
            79, 0, 'images/watermelon.png'),
        ('Strawberries', 0, 'Plump and juicy, these farm fresh strawberries won''t last long!', 999,
            0,
            'images/strawberry.png'),
        ('Bananas', 0, 'Nature''s perfect finger fruit!', 149, 0, 'images/banana.png'),
        ('Apples', 0, 'These crisp apples are a great snack in the summer sun.', 699, 0,
            'images/apple.png'),
        ('Cherries', 0,
            'The perfect blend of sweet and sour, our cherries are the perfect summer treat.', 2299, 0,
            'images/cherry.png'),
        ('Oranges', 0, 'Oranges are perfect for bringing a little sun to an otherwise cloudy day.',
            399, 0, 'images/orange.png'),
        ('Organic Tomatoes', 1,
            'These organically grown tomatoes are a perfect fit for your summer BBQ.', 569, 1,
            'images/organic_tomato.png'),
        ('Organic Onions', 1, 'Organic onions are the perfect base for all your cooking needs.', 49,
            1, 'images/organic_onion.png'),
        ('Organic Chilis', 1, 'Hot and spicy, our organic chili''s will add a kick to your kitchen.',
            1299,
            1, 'images/organic_chilli.png'),
        ('Organic Cucumbers', 1,
            'These cool cucumbers are the perfect addition to a refreshing summer salad. ', 999, 1,
            'images/organic_cucumber.png'),
        ('Organic Carrots', 1,
            'Our organic carrots are a hearty and healthy crunchy snack or a perfect side for your family dinners.',
            49, 1, 'images/organic_carrot.png'),
        ('Tomatoes', 1, 'Slice ''em up and add them to salads, burgers, or anything else at the BBQ
        this summer.', 429, 0, 'images/tomato.png '),
        ('Potatoes ', 1, 'Boil ''em, mash ''em, stick ''em in a stew.', 229, 0,
            'images/potato.png'),
        ('Beans', 1, 'Beans, beans, the magical fruit!', 979, 0, 'images/beans.png'),
        ('Cucumbers', 1, 'Cucumbers are the perfect addition to so many summer dishes!', 549, 0,
            'images/cucumber.png');

    DROP TABLE IF EXISTS `t_user`;
    create table web_team_work.t_user
    (
        id serial
        comment 'user id',
    user_name      varchar
        (512)                           not null comment 'user name',
    first_name     varchar
        (128) default ''                not null comment 'first name',
    last_name      varchar
        (128) default ''                not null comment 'last name',
    password       varchar
        (16)                            not null comment 'user password',
    admin_group    smallint     default 0                 not null comment 'admin_group 0: not admin; 1: yes',
    invalid        smallint     default 0                 not null comment 'invalid item, 0: valid; 1: invalid',
    operation_time timestamp    default CURRENT_TIMESTAMP not null comment 'the date time that the record inserted or updated',
    constraint pk_product_id
        primary key
        (id)
) engine = innodb;

        create unique index unique_user_user_name
    on web_team_work.t_user (user_name);

        insert into t_user
            (user_name, first_name, last_name, password, admin_group, invalid)
        values
            ('admin@teamwork.web', 'admin', 'group', 'aA12345', 1, 0);

        insert into t_user
            (user_name, first_name, last_name, password, admin_group, invalid)
        values
            ('guest@teamwork.web', 'guest', 'group', 'aA12345', 0, 0);
