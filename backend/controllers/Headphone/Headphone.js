const prisma = require("../../prisma/index");
const getHeaphones = async (req, res) => {
  try {
    const allHeadphones = await prisma.produit.findMany({
      where: {
        category: "headphones",
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
    return res
      .status(200)
      .json({ message: "data chargée", data: allHeadphones });
  } catch (error) {
    console.log("headPhone", error);
  }
};

module.exports = getHeaphones;
