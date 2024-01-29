DO $$
    DECLARE
        isEmpty BOOLEAN;
    BEGIN

        SELECT CASE WHEN EXISTS (SELECT * FROM movement LIMIT 1)
                        THEN FALSE
                    ELSE TRUE
                   END INTO isEmpty;

        IF isEmpty THEN
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '123A123B', '456A456B', 'Cow', 300, '2023-11-12');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '789A789B', '234A234B', 'Goat', 250, '2023-11-13');
            INSERT INTO movement VALUES ('FarmCo', 'Health Inspection', '234A234B', '567A567B', 'Chicken', 220, '2023-11-14');
            INSERT INTO movement VALUES ('ProduceMovers', 'Transportation', '567A567B', '890A890B', 'Swine', 150, '2023-11-15');
            INSERT INTO movement VALUES ('AgriTrans', 'Market Delivery', '890A890B', '345A345B', 'Horse', 180, '2023-11-12');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '345A345B', '678A678B', 'Cow', 120, '2023-11-13');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '901A901B', '456A456C', 'Goat', 250, '2023-11-14');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '456A456C', '789A789C', 'Chicken', 300, '2023-11-15');
            INSERT INTO movement VALUES ('FarmCo', 'Restocking', '789A789C', '234A234C', 'Horse', 180, '2023-11-12');
            INSERT INTO movement VALUES ('ProduceMovers', 'Sale Transfer', '234A234C', '567A567C', 'Swine', 150, '2023-11-13');
            INSERT INTO movement VALUES ('AgriTrans', 'Breeding Program', '567A567C', '890A890C', 'Cow', 250, '2023-11-14');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '890A890C', '345A345C', 'Chicken', 300, '2023-11-15');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '345A345C', '678A678C', 'Horse', 120, '2023-11-12');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '678A678C', '901A901C', 'Goat', 250, '2023-11-13');
            INSERT INTO movement VALUES ('FarmCo', 'Health Inspection', '901A901C', '901A901B', 'Swine', 180, '2023-11-14');
            INSERT INTO movement VALUES ('ProduceMovers', 'Transportation', '901A901B', '234A234E', 'Chicken', 150, '2023-11-15');
            INSERT INTO movement VALUES ('AgriTrans', 'Market Delivery', '234A234E', '234A234D', 'Horse', 250, '2023-11-12');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '234A234D', '567A567D', 'Cow', 300, '2023-11-13');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '567A567D', '890A890D', 'Goat', 220, '2023-11-14');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '890A890D', '345A345D', 'Swine', 180, '2023-11-15');
            INSERT INTO movement VALUES ('FarmCo', 'Restocking', '345A345D', '678A678D', 'Chicken', 150, '2023-11-12');
            INSERT INTO movement VALUES ('ProduceMovers', 'Sale Transfer', '678A678D', '901A901D', 'Horse', 250, '2023-11-13');
            INSERT INTO movement VALUES ('AgriTrans', 'Breeding Program', '901A901D', '234A234F', 'Cow', 120, '2023-11-14');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '234A234F', '345A345D', 'Goat', 300, '2023-11-15');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '345A345D', '234A234E', 'Chicken', 400, '2023-11-12');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '234A234E', '567A567E', 'Swine', 120, '2023-11-13');
            INSERT INTO movement VALUES ('FarmCo', 'Health Inspection', '567A567E', '890A890E', 'Horse', 150, '2023-11-14');
            INSERT INTO movement VALUES ('ProduceMovers', 'Transportation', '890A890E', '345A345E', 'Cow', 100, '2023-11-15');
            INSERT INTO movement VALUES ('AgriTrans', 'Market Delivery', '345A345E', '678A678E', 'Goat', 150, '2023-11-12');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '678A678E', '901A901E', 'Chicken', 180, '2023-11-13');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '901A901E', '234A234C', 'Horse', 250, '2023-11-14');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '234A234C', '234A234E', 'Swine', 300, '2023-11-15');
            INSERT INTO movement VALUES ('FarmCo', 'Restocking', '234A234E', '234A234F', 'Cow', 180, '2023-11-12');
            INSERT INTO movement VALUES ('ProduceMovers', 'Sale Transfer', '234A234F', '567A567F', 'Goat', 150, '2023-11-13');
            INSERT INTO movement VALUES ('AgriTrans', 'Breeding Program', '567A567F', '678A678E', 'Chicken', 250, '2023-11-14');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '678A678E', '901A901B', 'Horse', 300, '2023-11-15');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '901A901B', '901A901D', 'Swine', 120, '2023-11-12');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '901A901D', '567A567B', 'Cow', 250, '2023-11-13');
            INSERT INTO movement VALUES ('FarmCo', 'Health Inspection', '567A567B', '789A789B', 'Goat', 180, '2023-11-14');
            INSERT INTO movement VALUES ('ProduceMovers', 'Transportation', '789A789B', '567A567F', 'Chicken', 150, '2023-11-15');
            INSERT INTO movement VALUES ('AgriTrans', 'Market Delivery', '345A345E', '789A789C', 'Horse', 250, '2023-11-12');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '567A567E', '901A901E', 'Swine', 300, '2023-11-13');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '345A345E', '567A567F', 'Cow', 220, '2023-11-14');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '456A456C', '567A567E', 'Goat', 180, '2023-11-15');
            INSERT INTO movement VALUES ('FarmCo', 'Restocking', '789A789C', '901A901E', 'Chicken', 150, '2023-11-12');
            INSERT INTO movement VALUES ('ProduceMovers', 'Sale Transfer', '567A567F', '678A678E', 'Horse', 250, '2023-11-13');
            INSERT INTO movement VALUES ('AgriTrans', 'Breeding Program', '456A456C', '234A234F', 'Cow', 120, '2023-11-14');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '345A345C', '789A789C', 'Goat', 300, '2023-11-15');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '567A567E', '901A901D', 'Chicken', 400, '2023-11-12');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '456A456C', '789A789B', 'Swine', 120, '2023-11-13');
            INSERT INTO movement VALUES ('FarmCo', 'Health Inspection', '345A345D', '123A123B', 'Horse', 150, '2023-11-14');
            INSERT INTO movement VALUES ('ProduceMovers', 'Transportation', '890A890E', '345A345E', 'Cow', 100, '2023-11-15');
            INSERT INTO movement VALUES ('AgriTrans', 'Market Delivery', '890A890E', '345A345E', 'Goat', 150, '2023-11-12');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '567A567F', '234A234E', 'Chicken', 180, '2023-11-13');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '901A901E', '234A234F', 'Horse', 250, '2023-11-14');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '345A345C', '345A345D', 'Swine', 300, '2023-11-15');
            INSERT INTO movement VALUES ('FarmCo', 'Restocking', '901A901E', '234A234E', 'Cow', 180, '2023-11-12');
            INSERT INTO movement VALUES ('ProduceMovers', 'Sale Transfer', '901A901D', '890A890E', 'Goat', 150, '2023-11-13');
            INSERT INTO movement VALUES ('AgriTrans', 'Breeding Program', '901A901E', '678A678E', 'Chicken', 250, '2023-11-14');
            INSERT INTO movement VALUES ('RuralHaulers', 'Diversification', '345A345D', '234A234E', 'Horse', 300, '2023-11-15');
            INSERT INTO movement VALUES ('LivestockLogistics', 'Market Demand', '890A890E', '345A345E', 'Swine', 120, '2023-11-12');
            INSERT INTO movement VALUES ('CattleExpress', 'Expansion', '901A901D', '890A890E', 'Cow', 250, '2023-11-13');
        END IF;
END $$;