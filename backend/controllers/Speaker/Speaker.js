const prisma = require("../../prisma/index");
const getSpeakers = async (req, res) => {
  try {
    const allSpeakers = await prisma.produit.findMany({
      where: {
        category: "speakers",
      },
      select: {
        id: true,
        slug: true,
        name: true,
        image: true,
        new: true,
        category: true,
        categoryImage: true,
        description: true,
      },
    });
    return res.status(200).json({ message: "data chargée", data: allSpeakers });
  } catch (error) {
    console.log("speakers", error);
  }
};

module.exports = getSpeakers;
