const GameCharacter = require("./GameCharacter");
const CharacterFactory = require("./CharacterFactory");

function main() {

  const original = new GameCharacter(
    1,
    "Warrior",
    10,
    "Sword"
  );

  const factory = new CharacterFactory(original);

  const clone1 = factory.cloneCharacter();
  const clone2 = factory.cloneCharacter();

  clone1.setName("Mage");
  clone1.setLevel(15);
  clone1.setWeapon("Staff");

  clone2.setName("Archer");
  clone2.setLevel(20);
  clone2.setWeapon("Bow");

  console.log("Original:", original.toString());
  console.log("Clone 1:", clone1.toString());
  console.log("Clone 2:", clone2.toString());

  console.log("Original === Clone 1:", original === clone1);
  console.log("Original === Clone 2:", original === clone2);
  console.log("Clone 1 === Clone 2:", clone1 === clone2);
}

main();
