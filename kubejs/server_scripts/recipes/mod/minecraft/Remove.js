ServerEvents.recipes((event) => {
    let removeRecipeIds = [
        "minecraft:packed_ice",
        "minecraft:blue_ice",
        "alexscaves:gunpowder_from_sulfur",
        "minecraft:sugar_from_sugar_cane"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})