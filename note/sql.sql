/*//修改日期，并保证时间不变  */
UPDATE history SET endTm = ADDTIME (date('2017-09-21')+INTERVAL 0 hour,time(endTm))

UPDATE comment c set c.time = DATE_ADD(c.time, INTERVAL 7 DAY) ; 加
UPDATE comment c set c.time = DATE_SUB(c.time, INTERVAL 1 MONTH) 减  

-- 倒数第二位为M
select * from table1 where name like '%M_';

select * from table1 where id is null

select * from table1 where num in (155,124,156)

SELECT * FROM table LIMIT 95,-1; --第94以后的全部

SELECT * from history WHERE id REGEXP '^1b[rn]' -- 正则

SELECT * from history WHERE ( roomid < 3 and roomid>0 ) or (roomid>7 and roomid<9) --多个区间

select roomid,roomname,count(*) from history GROUP BY roomid --统计数量

--1 c表中会议室是d表中数据，2 按会议室分组得到数量 3 id排序，因为是字符串 +0
select c.roomid ,c.id,c.meetname,d.name,d.id ,count(*) from history as c  inner join  meetingroom as d on c.roomid=d.id GROUP BY roomid ORDER BY roomid+0

select meetname from history union select name from hehe   --生成一列

--select id into bebes from hehe ; mysql  不支持 select into from

--http://uule.iteye.com/blog/1569262 多个分组group by

select * from 10000_web WHERE `status`=2 and url not in (select url from wburl);  -- 

ALTER TABLE `wburl` ADD COLUMN `a`  varchar(255) NULL AFTER `action`;
ALTER TABLE `wburl` CHANGE COLUMN `appid` `appi`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL AFTER `action`;

select * from wburl  where statu  in (1,2) order by  createdAt limit 10; -- 注意顺序
SELECT * from 10000_web limit 2,3