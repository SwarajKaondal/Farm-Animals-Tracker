DO $$
    DECLARE
        isEmpty BOOLEAN;
    BEGIN

        SELECT CASE WHEN EXISTS (SELECT * FROM farm LIMIT 1)
                        THEN FALSE
                    ELSE TRUE
                   END INTO isEmpty;

        IF isEmpty THEN
            INSERT INTO farm VALUES ('123A123B', '123 Farm Street', 'Farmington', 'Green Acres', 12345, 'CA', 34.0522, -118.2437, 1500);
            INSERT INTO farm VALUES ('456A456B', '456 Livestock Lane', 'Cattleburg', 'Moo Haven', 56789, 'TX', 29.7604, -95.3698, 1200);
            INSERT INTO farm VALUES ('789A789B', '789 Pasture Place', 'Sheeptown', 'Wooly Fields', 98765, 'NY', 40.7128, -74.0060, 800);
            INSERT INTO farm VALUES ('234A234B', '234 Ranch Road', 'Horseland', 'Gallop Estates', 23456, 'AZ', 33.4484, -112.0740, 1600);
            INSERT INTO farm VALUES ('567A567B', '567 Poultry Parkway', 'Eggsville', 'Feather Haven', 56789, 'GA', 33.7490, -84.3880, 500);
            INSERT INTO farm VALUES ('890A890B', '890 Barn Boulevard', 'Hayfield', 'Golden Harvest Farm', 89012, 'KS', 39.0473, -95.6752, 1000);
            INSERT INTO farm VALUES ('345A345B', '345 Meadow Lane', 'Pigsville', 'Slop Bucket Farm', 34567, 'OH', 39.9612, -82.9988, 700);
            INSERT INTO farm VALUES ('678A678B', '678 Orchard Avenue', 'Cropsville', 'Harvest Hills', 67890, 'IA', 41.8780, -93.0977, 1300);
            INSERT INTO farm VALUES ('901A901B', '901 Vineyard Vista', 'Grapetown', 'Wine Country Ranch', 90123, 'CA', 38.4404, -122.7141, 1800);
            INSERT INTO farm VALUES ('456A456C', '456 Garden Grove', 'Floral City', 'Blossom Farmstead', 45678, 'FL', 27.9506, -82.4572, 1100);
            INSERT INTO farm VALUES ('789A789C', '789 Orchard Oaks', 'Fruitville', 'Juicy Acres', 78901, 'WA', 47.6062, -122.3321, 1600);
            INSERT INTO farm VALUES ('234A234C', '234 Wheatfield Way', 'Grainville', 'Golden Grain Farm', 23456, 'IL', 41.8781, -87.6298, 1200);
            INSERT INTO farm VALUES ('567A567C', '567 Apiary Avenue', 'Beeville', 'Honey Haven Farm', 56789, 'OR', 45.5051, -122.6750, 900);
            INSERT INTO farm VALUES ('890A890C', '890 Orchard Outlook', 'Appleton', 'Crisp Orchard Farm', 89012, 'WI', 43.0389, -87.9065, 1500);
            INSERT INTO farm VALUES ('345A345C', '345 Greenhouse Grove', 'Floristown', 'Blooming Fields', 34567, 'TX', 32.7767, -96.7970, 800);
            INSERT INTO farm VALUES ('678A678C', '678 Fishery Farm', 'Aquaville', 'Splash Farms', 67890, 'FL', 25.7617, -80.1918, 1200);
            INSERT INTO farm VALUES ('901A901C', '901 Cottonwood Court', 'Textile City', 'Fiber Fields', 90123, 'NC', 35.7796, -78.6382, 1000);
            INSERT INTO farm VALUES ('234A234D', '234 Maple Meadow', 'Syrupville', 'Sweet Sap Farms', 23456, 'VT', 44.5588, -72.5778, 1500);
            INSERT INTO farm VALUES ('567A567D', '567 Pineapple Place', 'Tropicburg', 'Exotic Fruit Farm', 56789, 'HI', 20.7961, -156.3319, 1100);
            INSERT INTO farm VALUES ('890A890D', '890 Equestrian Estates', 'Stabletown', 'Galloping Fields', 89012, 'KY', 38.0406, -84.5037, 1300);
            INSERT INTO farm VALUES ('345A345D', '345 Orchard Oasis', 'Fruitland', 'Tropical Harvest', 34567, 'FL', 27.9904, -82.3018, 900);
            INSERT INTO farm VALUES ('678A678D', '678 Sunflower Street', 'Blossomville', 'Sunshine Farms', 67890, 'CA', 36.7783, -119.4179, 1800);
            INSERT INTO farm VALUES ('901A901D', '901 Blueberry Boulevard', 'Berrytown', 'Berry Bliss Farm', 90123, 'ME', 45.2538, -69.4455, 700);
            INSERT INTO farm VALUES ('234A234E', '234 Pumpkin Patch', 'Harvestburg', 'Festive Fields', 23456, 'OH', 41.4993, -81.6944, 1600);
            INSERT INTO farm VALUES ('567A567E', '567 Aviary Avenue', 'Birdsville', 'Feathered Friends Farm', 56789, 'AZ', 33.6846, -112.1074, 1300);
            INSERT INTO farm VALUES ('890A890E', '890 Olive Orchard', 'Mediterra', 'Mediterranean Farms', 89012, 'CA', 36.7783, -119.4179, 1500);
            INSERT INTO farm VALUES ('345A345E', '345 Pumpkin Plaza', 'Harveston', 'Pumpkin Patch Farms', 34567, 'IL', 41.8781, -87.6298, 1200);
            INSERT INTO farm VALUES ('678A678E', '678 Honeycomb Heights', 'Beehive City', 'Sweet Bee Farms', 67890, 'UT', 40.7608, -111.8910, 800);
            INSERT INTO farm VALUES ('901A901E', '901 Meadowland Mansion', 'Floralburg', 'Blooms Manor', 90123, 'OH', 39.9612, -82.9988, 1100);
            INSERT INTO farm VALUES ('234A234F', '234 Vineyard View', 'Grapeland', 'Vineyard Vistas', 23456, 'CA', 34.0522, -118.2437, 900);
            INSERT INTO farm VALUES ('567A567F', '567 Cornfield Court', 'Maizetown', 'Golden Grain Farms', 56789, 'NE', 41.2565, -95.9345);
        END IF;
END $$;