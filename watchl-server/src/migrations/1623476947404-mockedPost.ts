import { MigrationInterface, QueryRunner } from "typeorm";

export class mockedPost1623476947404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('That Sinking Feeling', 5, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'GTLS', '2021-02-13T04:12:38Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Endurance', 5, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'FIS', '2020-12-07T06:11:45Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('For Love and Gold (L''armata Brancaleone)', 5, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'DLR', '2021-01-27T16:34:24Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Morphia (Morfiy)', 5, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'HSEB', '2021-01-17T22:15:28Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Westward Ho', 5, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'WIX', '2020-06-26T19:56:08Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('The Mysterious Island', 5, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'WPG^I', '2020-12-03T11:05:22Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Cows (Vacas)', 5, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'UMPQ', '2020-07-22T22:56:59Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Informers, The', 5, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'FBSS', '2021-04-18T20:09:37Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Super', 5, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 'DDT', '2021-04-15T03:06:48Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Meat Love', 5, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'LPX', '2020-10-04T07:29:59Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Zebra Lounge', 5, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'BF.B', '2020-09-14T07:22:27Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Dragon Ball: Sleeping Princess in Devil''s Castle (Doragon bôru: Majinjô no nemuri hime)', 5, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'SHAK', '2021-02-19T17:57:05Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Nutty Professor, The', 5, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'BFZ', '2021-01-13T12:11:23Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Impossible, The (Imposible, Lo)', 5, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'FLR', '2021-05-08T07:12:40Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Girl, Positive', 5, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
        
        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'FRPT', '2020-09-26T18:38:57Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Male Domination', 5, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'IHG', '2021-05-14T12:18:51Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('The Invitation', 5, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'PGH', '2021-06-07T09:13:03Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Onion Field, The', 5, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'NUW', '2021-01-25T16:14:56Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('American Son', 5, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'SVU', '2020-12-27T22:28:38Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Other Man, The', 5, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'FSZ', '2021-05-02T03:25:57Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Cool Air', 5, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'FSCFL', '2020-09-08T05:53:40Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Misfits, The', 5, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'ADX', '2021-01-22T12:42:51Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Entre Amigos (Planta 4ª)', 5, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 'IMED', '2020-08-09T02:29:39Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Little Richard', 5, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 'NWBI', '2020-10-25T08:22:38Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Through a Glass Darkly (Såsom i en spegel)', 5, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'VR^A', '2020-08-02T20:53:39Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Workingman''s Death', 5, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'AMSF', '2021-05-27T08:12:25Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Cars', 5, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'PIRS', '2020-11-14T17:17:50Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('A Kind of America 2', 5, 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'QEP', '2020-11-29T20:15:12Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Night of the Following Day, The', 5, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'KWEB', '2020-09-14T12:57:28Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Kirikou and the Sorceress (Kirikou et la sorcière)', 5, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'EL', '2020-08-17T08:17:41Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Jailhouse Rock', 5, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'FRED', '2021-01-18T03:05:16Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Year of the Yao, The', 5, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'PNRG', '2021-01-01T10:24:38Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Diabolique', 5, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'NTRSP', '2020-08-22T00:38:01Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Blues Brothers 2000', 5, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'BTU', '2020-10-10T08:43:18Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('King Is Dancing, The (Le roi danse)', 5, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'AMCX', '2020-09-13T13:21:05Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Soviet Story, The', 5, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'SPE^B', '2020-07-19T08:38:19Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Memphis Belle: A Story of a Flying Fortress, The', 5, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'EMES', '2020-07-27T09:53:44Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Turbo: A Power Rangers Movie', 5, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'TVTY', '2021-03-29T21:41:39Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Dolly and Her Lover (Räpsy ja Dolly eli Pariisi odottaa)', 5, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'VEACU', '2020-08-19T15:21:33Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Night Catches Us', 5, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'KMI^A', '2020-07-14T23:54:19Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Face of Terror', 5, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'CTRV', '2021-04-05T21:30:09Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Stella Does Tricks', 5, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'WHLRD', '2021-03-19T07:45:38Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Young Girls of Rochefort, The (Demoiselles de Rochefort, Les)', 5, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'ESES', '2020-06-16T15:48:52Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Moon of the Wolf', 5, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'Z', '2020-07-16T15:12:24Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Gaby: A True Story', 5, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'ATU', '2021-05-16T00:21:59Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Amorosa', 5, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'EPR^C', '2020-12-26T18:38:29Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Squeeze', 5, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'AMCX', '2020-10-19T16:22:28Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Crying Game, The', 5, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'CNIT', '2020-08-14T21:35:34Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Devil''s Ground, The', 5, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'SAN^C', '2020-08-03T02:05:26Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Far', 5, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'TPB', '2021-05-22T04:30:58Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Ruhr', 5, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'M', '2020-07-17T06:32:26Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Boy on a Dolphin', 5, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'WPG', '2021-01-11T17:53:37Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('If a Tree Falls: A Story of the Earth Liberation Front', 5, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'NOV', '2020-07-31T02:50:07Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Good People', 5, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'PCG', '2021-01-23T02:18:53Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Idle Class, The', 5, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'BDC^B', '2020-07-06T01:22:23Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('King of Hearts', 5, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'NODK', '2020-07-17T10:48:32Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Sin City', 5, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'MSEX', '2020-11-04T03:20:47Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('When the Bough Breaks', 5, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'RST', '2020-11-08T12:14:01Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Winnie the Pooh and Tigger Too', 5, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'SPWR', '2021-01-19T19:41:03Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Heart Like a Wheel', 5, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'FCBC', '2020-06-29T10:08:30Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Five Senses, The', 5, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'MPACW', '2020-12-06T05:37:12Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Queen of the Amazons', 5, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'AP', '2021-05-31T23:40:37Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Rogue', 5, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'MATX', '2020-11-18T21:44:53Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Bigger, Stronger, Faster*', 5, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'AHC', '2020-09-21T05:09:09Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Reprise', 5, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'BKD', '2021-01-24T02:37:47Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Everlasting Moments (Maria Larssons eviga ögonblick)', 5, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'DRAD', '2020-08-23T05:22:10Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Night of the Living Dead', 5, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'NSS', '2021-04-07T15:04:38Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Night, The (Notte, La)', 5, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'UAA', '2021-04-17T10:22:32Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Promise of the Flesh (Yukcheui yaksok)', 5, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'NURO', '2020-09-04T09:55:26Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Chang: A Drama of the Wilderness', 5, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
        Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'UNTY', '2020-09-02T16:57:04Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Twelve Tasks of Asterix, The (Les douze travaux d''Astérix)', 5, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'CFRX', '2020-12-23T14:04:10Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Sex & the Other Man', 5, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'VKQ', '2021-01-30T04:14:09Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Madigan', 5, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 'CACQ', '2020-10-17T23:45:31Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('When Harry Met Sally...', 5, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'FET', '2021-05-22T23:42:23Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Easy Rider', 5, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'LRCX', '2020-09-26T02:52:26Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Next Stop Wonderland', 5, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'PNBK', '2020-09-28T20:09:13Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Little Man', 5, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'STMP', '2021-03-20T10:28:05Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Birdman of Alcatraz', 5, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'FARO', '2021-04-22T23:27:03Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Lost Souls', 5, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'SUI', '2020-09-07T13:54:23Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Oranges and Sunshine', 5, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
        
        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'OACQ', '2020-12-26T12:10:41Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Crashing', 5, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
        
        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'TTEK', '2021-04-15T14:31:28Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Patti Smith: Dream of Life', 5, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'GURE', '2021-06-06T22:45:34Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Amber Alert ', 5, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'REIS', '2020-12-14T05:40:09Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Passion in the Desert', 5, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'LBTYK', '2020-09-30T18:01:02Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('An Empress and the Warriors', 5, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'BHP', '2020-08-15T20:09:29Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Pit, the Pendulum and Hope, The (Kyvadlo, jáma a nadeje)', 5, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
        Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'NSIT', '2020-08-30T19:50:47Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Kwik Stop', 5, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'GES', '2021-03-09T19:13:23Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('All of Me', 5, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 'OTEX', '2020-12-08T17:47:07Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Louisiana Story', 5, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'SBUX', '2021-04-06T13:45:00Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Water', 5, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'GLW', '2020-09-25T17:45:12Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('King of the Children (Hai zi wang)', 5, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'ARTW', '2021-04-07T07:40:54Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('One Nite In Mongkok (Wong gok hak yau)', 5, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'OPB', '2020-06-20T06:47:15Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Rampart', 5, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'NCS', '2021-02-02T09:17:14Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Luck, Trust & Ketchup: Robert Altman in Carver Country', 5, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'TCBI', '2021-03-06T15:20:15Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Invictus', 5, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'ZAIS', '2020-09-24T06:05:14Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Blondie Knows Best', 5, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'PPX', '2021-04-26T20:26:12Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Hysteria', 5, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'SCLN', '2021-05-30T22:26:54Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Mrs. Brown (a.k.a. Her Majesty, Mrs. Brown)', 5, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'RDN', '2020-12-21T21:12:25Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Voodoo Tiger', 5, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'BML^I', '2020-06-14T10:46:04Z');
        insert into post (title, "creatorId", content, tickers, "createdAt") values ('Enchantment', 5, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'JPM^D', '2021-03-05T12:59:13Z');
        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
