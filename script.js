/* ============================================================
   Moonlight Étoile — Global Brand Script & E-commerce System
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Comprehensive Product Catalog ───────────────────── */
  const products = [
    // Skincare - Cleanser
    {
      id: 'moonmilk-cleanser',
      name: 'Moonmilk Cleanser',
      category: 'skincare',
      subcategory: 'cleanser',
      price: 399,
      rating: 4.8,
      reviewsCount: 124,
      tag: 'Bestseller',
      desc: 'Gentle, pH-balanced amino acid milky cleanser that melts impurities while keeping your skin barrier perfectly intact.',
      benefits: ['Decongests skin without stripping natural lipids', 'Replenishes hydration with rice ferment extract', 'Soothes redness and calms irritation'],
      ingredients: 'Water, Sodium Cocoyl Glycinate, Glycerin, Oryza Sativa (Rice) Bran Extract, Centella Asiatica Extract, Ceramides NP, Hyaluronic Acid, Panthenol, Phenoxyethanol.',
      directions: 'Massage 1-2 pumps onto damp face in gentle circular motions. Rinse thoroughly with lukewarm water. Use morning and night.',
      image: 'images/Products,skin care/cleanser.jpg',
      hoverImage: 'images/Products,skin care/Cleanser (2).jpg'
    },
    // Skincare - Toner
    {
      id: 'aqua-glow-toner',
      name: 'Aqua Glow Hydrating Toner',
      category: 'skincare',
      subcategory: 'toner',
      price: 449,
      rating: 4.9,
      reviewsCount: 88,
      tag: 'New',
      desc: 'Deeply hydrating prep toner packed with fermented green tea and birch sap for a plump, luminous base.',
      benefits: ['Locks in deep, multi-layer hydration', 'Refines skin texture and appearance of pores', 'Prep skin for optimal serum absorption'],
      ingredients: 'Betula Alba (Birch) Juice, Saccharomyces Ferment Filtrate, Propanediol, Glycerin, Niacinamide, Camellia Sinensis (Green Tea) Leaf Extract, Allantoin.',
      directions: 'After cleansing, pat 3-4 drops directly into the face and neck using your palms until absorbed.',
      image: 'images/Products,skin care/Toner.jpg',
      hoverImage: 'images/Products,skin care/5.jpg'
    },
    // Skincare - Moisturizer
    {
      id: 'starlit-hydration-cream',
      name: 'Starlit Hydration Cream',
      category: 'skincare',
      subcategory: 'moisturizer',
      price: 499,
      rating: 4.7,
      reviewsCount: 215,
      tag: 'Bestseller',
      desc: 'Rich, cloud-like moisture cream infused with five weight ceramides and botanical squalane for intense skin barrier fortification.',
      benefits: ['Reinforces and repairs weakened skin barriers', 'Delivers continuous 24-hour hydration', 'Velvety finish, ideal under cosmetics'],
      ingredients: 'Water, Squalane, Caprylic/Capric Triglyceride, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Shea Butter, Sodium Hyaluronate.',
      directions: 'Apply a dime-sized amount to clean skin as the final step of your skincare ritual.',
      image: 'images/Products,skin care/moisturizer.jpg',
      hoverImage: 'images/Products,skin care/7.jpg'
    },
    // Skincare - Serum
    {
      id: 'stella-brightening-serum',
      name: 'Stella Brightening Serum',
      category: 'skincare',
      subcategory: 'serum',
      price: 499,
      rating: 4.9,
      reviewsCount: 142,
      tag: 'Brightening',
      desc: 'High-potency 15% Vitamin C complex combined with Ferulic Acid and Vitamin E to illuminate hyperpigmentation and defend against free radicals.',
      benefits: ['Visibly brightens dull complexion', 'Fades stubborn dark spots and sun damage', 'Provides robust daily antioxidant shield'],
      ingredients: 'Water, Ascorbic Acid (Vitamin C), Ethoxydiglycol, Tocopherol (Vitamin E), Ferulic Acid, Sodium Hyaluronate, Panthenol, Triethanolamine.',
      directions: 'Apply 3-4 drops in the morning to dry, clean face and neck before applying moisturiser and sunscreen.',
      image: 'images/Products,skin care/Brightening.jpg',
      hoverImage: 'images/Products,skin care/8.jpg'
    },
    {
      id: 'velvet-peeling-serum',
      name: 'Velvet Peeling Serum',
      category: 'skincare',
      subcategory: 'serum',
      price: 449,
      rating: 4.6,
      reviewsCount: 76,
      tag: 'New',
      desc: 'Gentle chemical exfoliant containing 8% Lactic Acid and 2% Salicylic Acid to resurface texture and reveal velvety baby-smooth skin.',
      benefits: ['Clears micro-congestions and blackheads', 'Gently exfoliates dead skin cells', 'Improves overall radiance and skin clarity'],
      ingredients: 'Water, Lactic Acid, Salicylic Acid, Glycerin, Sodium Hydroxide, Centella Asiatica Extract, Licorice Root Extract, Aloe Leaf Juice.',
      directions: 'Apply 2-3 drops at night to clean, dry skin. Limit initial use to 2-3 times per week.',
      image: 'images/Products,skin care/5.jpg',
      hoverImage: 'images/Products,skin care/9.jpg'
    },
    {
      id: 'moon-dew-serum',
      name: 'Moon Dew Serum',
      category: 'skincare',
      subcategory: 'serum',
      price: 449,
      rating: 4.9,
      reviewsCount: 198,
      tag: 'Bestseller',
      desc: 'Ultra-plumping multi-weight hyaluronic acid serum that floods the skin with deep moisture, erasing dehydration lines instantly.',
      benefits: ['Instantly plumps and smooths texture', 'Maintains elastic and bouncy feel', 'Provides lightweight, non-greasy finish'],
      ingredients: 'Water, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Niacinamide, Panthenol, Tremella Fuciformis (Mushroom) Extract, Ethylhexylglycerin.',
      directions: 'Apply 2-3 drops onto damp face after toning. Gently pat into the skin.',
      image: 'images/Products,skin care/8.jpg',
      hoverImage: 'images/Products,skin care/10.jpg'
    },
    // Skincare - Sunscreen
    {
      id: 'lumi-shield-sunscreen',
      name: 'Lumi Shield Sunscreen',
      category: 'skincare',
      subcategory: 'sunscreen',
      price: 399,
      rating: 4.8,
      reviewsCount: 312,
      tag: 'Dermatologist Recommended',
      desc: 'Invisible, ultra-lightweight daily sunscreen SPF 50+ PA++++ that leaves zero white cast and provides a beautiful natural-skin sheen.',
      benefits: ['Broad spectrum UVA/UVB protection', 'Completely translucent, weightless gel texture', 'Acts as a hydrating make-up primer'],
      ingredients: 'Water, Ethylhexyl Methoxycinnamate, Homosalate, Niacinamide, Centella Asiatica Extract, Green Tea Extract, Adenosine, Silica.',
      directions: 'Apply generously to face, neck, and ears as the last step of your morning skincare routine, 15 minutes before sun exposure.',
      image: 'images/Products,skin care/7.jpg',
      hoverImage: 'images/Products,skin care/11.jpg'
    },
    {
      id: 'radiant-tinted-sunscreen',
      name: 'Radiant Tinted Sunscreen',
      category: 'skincare',
      subcategory: 'sunscreen',
      price: 449,
      rating: 4.7,
      reviewsCount: 165,
      tag: 'Glow Finish',
      desc: 'Mineral sunscreen SPF 40 that delivers dynamic broad-spectrum defense along with a subtle, sheer tint to even skin tone.',
      benefits: ['Sheer tint adapts to multiple skin tones', '100% mineral zinc oxide defense', 'Leaves a healthy, dewy star-like glow'],
      ingredients: 'Zinc Oxide 12%, Titanium Dioxide 5%, Water, Squalane, Iron Oxides, Bisabolol, Tocopheryl Acetate, Jojoba Seed Oil.',
      directions: 'Shake well. Apply a smooth layer over the entire face as your morning moisture-shield.',
      image: 'images/Products,skin care/9.jpg',
      hoverImage: 'images/Products,skin care/12.jpg'
    },
    // Skincare - Eye Care & Face Mask
    {
      id: 'aqua-ice-mask',
      name: 'Aqua Ice Hydrating Face Mask',
      category: 'skincare',
      subcategory: 'face mask',
      price: 449,
      rating: 4.8,
      reviewsCount: 94,
      tag: 'Cooling Treatment',
      desc: 'Overnight cooling sleeping mask that locks down moisture, re-plumping tired skin while you sleep for a radiant wake-up.',
      benefits: ['Deeply cools and comforts hot skin', 'Prevents trans-epidermal water loss', 'Locks in active serums underneath'],
      ingredients: 'Water, Aloe Barbadensis Leaf Juice, Menthyl Lactate, Centella Asiatica Extract, Sodium Hyaluronate, Ceramide NP.',
      directions: 'Apply a generous layer as the final step of your night routine. Leave on overnight and wash off in the morning.',
      image: 'images/Products,skin care/10.jpg',
      hoverImage: 'images/Products,skin care/13.jpg'
    },
    {
      id: 'crystal-eye-cream',
      name: 'Crystal Eye Cream',
      category: 'skincare',
      subcategory: 'eye care',
      price: 449,
      rating: 4.5,
      reviewsCount: 112,
      tag: 'Peptide Infused',
      desc: 'Velvety eye cream featuring advanced peptide chains and caffeine to dramatically reduce puffiness and dark circles.',
      benefits: ['Fades visual dark circles', 'Smooths fine lines and crow\'s feet', 'Depuffs the delicate under-eye area'],
      ingredients: 'Water, Acetyl Hexapeptide-8, Caffeine, Shea Butter, Niacinamide, Avocado Oil, Licorice Root Extract.',
      directions: 'Gently pat a tiny amount around the entire eye area using your ring finger.',
      image: 'images/Products,skin care/11.jpg',
      hoverImage: 'images/Products,skin care/14.jpg'
    },
    {
      id: 'moon-petal-undereye',
      name: 'Moon Petal Undereye Mask',
      category: 'skincare',
      subcategory: 'face mask',
      price: 399,
      rating: 4.8,
      reviewsCount: 154,
      tag: 'Bestseller',
      desc: 'Sparkling hydrogel undereye patches infused with caffeine and rose extract to instantly awaken and soothe tired eyes.',
      benefits: ['Instantly depuffs and hydrates under-eyes', 'Cooling hydrogel hugs contours perfectly', 'Brightens dark shadows in 10 minutes'],
      ingredients: 'Water, Hydrolyzed Collagen, Caffeine, Rose Damascena Flower Extract, Glycerin, Carrageenan, Gold.',
      directions: 'Apply patches under clean eyes. Leave on for 10-15 minutes, then discard and tap in remaining serum.',
      image: 'images/Products,skin care/12.jpg',
      hoverImage: 'images/Products,skin care/5.jpg'
    },

    // Cosmetics - Face - Primers & Foundations
    {
      id: 'water-veil-primer',
      name: 'Moonlight Water Veil Primer',
      category: 'cosmetics',
      subcategory: 'primer',
      price: 399,
      rating: 4.9,
      reviewsCount: 110,
      tag: 'Glow Base',
      desc: 'Ultra-hydrating gel-liquid primer that creates a sticky, glassy finish to anchor make-up for flawless, long-lasting wear.',
      benefits: ['Extends make-up wear up to 16 hours', 'Hydrates skin with a glassy, dewy veil', 'Fills fine lines for smooth makeup glide'],
      ingredients: 'Water, Propanediol, Glycerin, PEG-150 Distearate, Niacinamide, Panthenol, Hyaluronic Acid, Phenoxyethanol.',
      directions: 'Smooth 1 pump over clean face. Wait 30 seconds for it to set sticky before applying complexion cosmetics.',
      image: 'images/Products,skin care/13.jpg',
      hoverImage: 'images/Products,skin care/Cleanser (2).jpg'
    },
    {
      id: 'velvet-blur-primer',
      name: 'Moonlight Velvet Blur Primer',
      category: 'cosmetics',
      subcategory: 'primer',
      price: 399,
      rating: 4.7,
      reviewsCount: 89,
      tag: 'Matte Finish',
      desc: 'Silicone-free, weightless blur stick that instantly erases the appearance of pores and control shine for a velvety canvas.',
      benefits: ['Instantly blurs pores and texture', 'Controls oil and shine all day', 'Lightweight skin-breathing barrier'],
      ingredients: 'Silica, Dimethicone Crosspolymer, Isododecane, Tocopheryl Acetate, Centella Asiatica Extract.',
      directions: 'Swipe stick or pat cream onto zones prone to visible pores and shine (T-zone) prior to makeup.',
      image: 'images/Products,skin care/14.jpg',
      hoverImage: 'images/Products,skin care/cleanser.jpg'
    },
    {
      id: 'aqua-skin-foundation',
      name: 'Moonlight Aqua Skin Foundation',
      category: 'cosmetics',
      subcategory: 'foundation',
      price: 449,
      rating: 4.8,
      reviewsCount: 245,
      tag: 'Bestseller',
      desc: 'Serum-infused hydrating foundation that blends seamlessly into the skin for a medium, buildable cover with a radiant glow.',
      benefits: ['80% serum-base with Hyaluronic Acid', 'Buildable medium cover that breathes', 'Available in 12 luxurious shades'],
      ingredients: 'Water, Titanium Dioxide, Squalane, Glycerin, Caprylyl Methicone, Sodium Hyaluronate, Panthenol, Iron Oxides.',
      directions: 'Apply 1-2 pumps onto the back of your hand. Buff into the skin using a damp sponge or dense foundation brush.',
      shades: ['Fair Light', 'Neutral Beige', 'Warm Sand', 'Golden Honey', 'Rich Tan', 'Deep Mocha'],
      image: 'images/Products,skin care/5.jpg',
      hoverImage: 'images/Products,skin care/7.jpg'
    },
    {
      id: 'velvet-skin-foundation',
      name: 'Moonlight Velvet Skin Foundation',
      category: 'cosmetics',
      subcategory: 'foundation',
      price: 449,
      rating: 4.7,
      reviewsCount: 167,
      tag: 'Soft Matte',
      desc: 'Long-wear soft matte foundation that offers full buildable coverage while retaining a natural skin-like texture.',
      benefits: ['Erases shine without looking cakey', 'Humidity-resistant, transfer-proof', 'Comfortable skin-caring ingredients'],
      ingredients: 'Water, Cyclopentasiloxane, Silica, Trimethylsiloxysilicate, Niacinamide, Glycerin, Phenoxyethanol, Iron Oxides.',
      directions: 'Dot onto face and blend outward with a dense foundation brush for a velvet airbrushed finish.',
      shades: ['Fair Ivory', 'Soft Beige', 'Warm Sand', 'Warm Ochre', 'Rich Almond', 'Deep Cocoa'],
      image: 'images/Products,skin care/7.jpg',
      hoverImage: 'images/Products,skin care/8.jpg'
    },
    {
      id: 'moon-dew-skin-tint',
      name: 'Moon Dew Skin Tint',
      category: 'cosmetics',
      subcategory: 'skin tint',
      price: 449,
      rating: 4.9,
      reviewsCount: 182,
      tag: 'Dewy Skin',
      desc: 'Ultra-sheer skin tint formulated to deliver an instantly fresh, dewy base while letting your natural freckles shine through.',
      benefits: ['Lightest, breathable coverage', 'Deeply hydrates and plumps skin', 'Sheer, flexible skin-like shades'],
      ingredients: 'Water, Squalane, Glycerin, Caprylic/Capric Triglyceride, Sodium Hyaluronate, Centella Asiatica, Iron Oxides.',
      directions: 'Massage 3-4 drops directly onto your skin with fingers, just like a daily moisturiser.',
      shades: ['Light Glow', 'Medium Dew', 'Deep Bronze'],
      image: 'images/Products,skin care/8.jpg',
      hoverImage: 'images/Products,skin care/9.jpg'
    },
    {
      id: 'moonlight-cushion',
      name: 'Moonlight Cushion',
      category: 'cosmetics',
      subcategory: 'cushion',
      price: 449,
      rating: 4.8,
      reviewsCount: 220,
      tag: 'Bestseller',
      desc: 'Convenient on-the-go cushion foundation that supplies instant hydration and flawless luminous touch-ups.',
      benefits: ['Travel-friendly compact with custom puff', 'Buildable light-to-medium radiant cover', 'Soothes skin with Centella Extract'],
      ingredients: 'Water, Ethylhexyl Methoxycinnamate, Zinc Oxide, Glycerin, Niacinamide, Adenosine, Centella Asiatica.',
      directions: 'Press the puff gently into the cushion and pat evenly across your face. Reapply on-the-go.',
      shades: ['Light Ivory', 'Natural Beige', 'Honey Gold'],
      image: 'images/Products,skin care/9.jpg',
      hoverImage: 'images/Products,skin care/10.jpg'
    },
    {
      id: 'moonlight-concealer',
      name: 'Moonlight Concealer',
      category: 'cosmetics',
      subcategory: 'concealer',
      price: 399,
      rating: 4.8,
      reviewsCount: 194,
      tag: 'High Cover',
      desc: 'Crease-proof, high-coverage concealer packed with hydrating hyaluronic acid to brighten eyes and cover blemishes.',
      benefits: ['Full buildable coverage', 'Crease-proof, weightless formula', 'Hydrates and brightens under-eyes'],
      ingredients: 'Water, Titanium Dioxide, Dimethicone, Glycerin, Sodium Hyaluronate, Caffeine, Vitamin E.',
      directions: 'Dot under eyes, around nose, and over blemishes. Blend out with fingers or a small dense brush.',
      shades: ['Fair', 'Light', 'Medium', 'Tan', 'Deep'],
      image: 'images/Products,skin care/10.jpg',
      hoverImage: 'images/Products,skin care/11.jpg'
    },

    // Cosmetics - Face - Color
    {
      id: 'brontour-stick',
      name: 'Moonlight Brontour Stick',
      category: 'cosmetics',
      subcategory: 'contour',
      price: 399,
      rating: 4.9,
      reviewsCount: 144,
      tag: 'Bestseller',
      desc: 'Dual-ended cream bronzer and contour stick that effortlessly sculpts and warms the complexion with spring-like creaminess.',
      benefits: ['Effortless stick blending', 'Perfect cool contour & warm bronze shades', 'Natural skin-like cream finish'],
      ingredients: 'Caprylic/Capric Triglyceride, Jojoba Esters, Silica, Copernicia Cerifera (Carnauba) Wax, Iron Oxides.',
      directions: 'Swipe the cool shade along jawline and under cheekbones. Swipe the warm shade on forehead and cheeks. Blend with brush.',
      shades: ['Light Sculpt', 'Medium Sculpt', 'Deep Sculpt'],
      image: 'images/Products,skin care/11.jpg',
      hoverImage: 'images/Products,skin care/12.jpg'
    },
    {
      id: 'liquid-bronzer',
      name: 'Moonlight Liquid Bronzer',
      category: 'cosmetics',
      subcategory: 'bronzer',
      price: 399,
      rating: 4.6,
      reviewsCount: 65,
      tag: 'New',
      desc: 'Liquid gold serum bronzer that can be mixed into moisturiser or worn alone for an instant sun-kissed starglow.',
      benefits: ['Can be mixed into any skincare product', 'Leaves a shimmering, healthy sun-kissed finish', 'Contains skin-loving antioxidants'],
      ingredients: 'Water, Glycerin, Mica, Sodium Hyaluronate, Grape Seed Extract, Vitamin E, Iron Oxides.',
      directions: 'Mix 1-2 drops with your serum, sunscreen, or foundation, or dab directly on high points of your face.',
      image: 'images/Products,skin care/12.jpg',
      hoverImage: 'images/Products,skin care/13.jpg'
    },
    {
      id: 'liquid-contour',
      name: 'Moonlight Liquid Contour',
      category: 'cosmetics',
      subcategory: 'contour',
      price: 399,
      rating: 4.8,
      reviewsCount: 82,
      tag: 'Natural Sculpt',
      desc: 'Sleek, sponge-tip liquid contour that makes cheekbone definition and structural sculpting incredibly intuitive.',
      benefits: ['Cool-toned, shadow-mimicking colors', 'Cushioned applicator for precise dots', 'Water-thin weightless formula'],
      ingredients: 'Water, Cyclohexasiloxane, Isododecane, Glycerin, Silica, Sorbitan Sesquioleate, Iron Oxides.',
      directions: 'Dot 2-3 spots along the hollows of your cheeks and blend upward with a damp sponge or fingers.',
      image: 'images/Products,skin care/13.jpg',
      hoverImage: 'images/Products,skin care/14.jpg'
    },
    {
      id: 'liquid-blush',
      name: 'Moonlight Liquid Blush',
      category: 'cosmetics',
      subcategory: 'blush',
      price: 399,
      rating: 4.9,
      reviewsCount: 304,
      tag: 'Bestseller',
      desc: 'Super-pigmented liquid blush that melts effortlessly into skin to deliver a beautiful, healthy flush of color.',
      benefits: ['High pigment, only 1 dot needed', 'Locks down for 12 hours of wear', 'Dewy finish that mimics natural skin flush'],
      ingredients: 'Water, Isododecane, Mica, Dimethicone, Glycerin, Phenoxyethanol, Titanium Dioxide, Iron Oxides.',
      directions: 'Tap 1 small dot onto the apples of your cheeks. Blend out immediately using a blush brush or fingers.',
      shades: ['Rosewood', 'Bare Peach', 'Berry Dew', 'Soft Mauve'],
      image: 'images/Products,skin care/14.jpg',
      hoverImage: 'images/Products,skin care/5.jpg'
    },
    // Cosmetics - Face - Powder & Spray
    {
      id: 'loose-powder',
      name: 'Moon Dust Loose Powder',
      category: 'cosmetics',
      subcategory: 'powder',
      price: 399,
      rating: 4.8,
      reviewsCount: 154,
      tag: 'Ultra-Blur',
      desc: 'Micro-milled translucent loose powder that sets makeup and locks out shine while reflecting light for a soft-focus glow.',
      benefits: ['Ultra-fine milled, no flashback', 'Controls shine while maintaining dimensional glow', 'Enriched with skin-soothing extract'],
      ingredients: 'Silica, Mica, Zea Mays (Corn) Starch, Lauroyl Lysine, Zinc Stearate, Centella Asiatica.',
      directions: 'Press a powder puff into the mesh. Press off excess, then roll and press over shiny zones.',
      image: 'images/Products,skin care/Toner.jpg',
      hoverImage: 'images/Products,skin care/7.jpg'
    },
    {
      id: 'powder-foundation',
      name: 'Moonlight Powder Foundation',
      category: 'cosmetics',
      subcategory: 'powder',
      price: 449,
      rating: 4.5,
      reviewsCount: 92,
      tag: 'Build Cover',
      desc: 'Versatile wet-or-dry powder foundation that provides lightweight medium coverage with a beautiful, natural satin finish.',
      benefits: ['Builds from light to full cover', 'Controls excess face oils without dry spots', 'Breathable skin-caring minerals'],
      ingredients: 'Mica, Talc, Zinc Oxide, Squalane, Vitamin E, Centella Asiatica Extract.',
      directions: 'Sweep onto face with a powder brush for light cover, or press with a damp sponge for maximum full coverage.',
      shades: ['Light Ivory', 'Natural Beige', 'Warm Honey'],
      image: 'images/Products,skin care/moisturizer.jpg',
      hoverImage: 'images/Products,skin care/8.jpg'
    },
    {
      id: 'setting-spray',
      name: 'Moon Mist Setting Spray',
      category: 'cosmetics',
      subcategory: 'setting spray',
      price: 399,
      rating: 4.8,
      reviewsCount: 178,
      tag: 'Glow Mist',
      desc: 'Bi-phase hydration mist containing nourishing oils and active hydrators to melt makeup together for a flawless finish.',
      benefits: ['Sets cosmetics for a glowing dewy look', 'Deeply hydrates and refreshes skin', 'Can be used as a midday booster'],
      ingredients: 'Water, Glycerin, Jojoba Seed Oil, Rosa Damascena Flower Water, Niacinamide, Panthenol.',
      directions: 'Shake well to activate phases. Hold 8 inches away and mist face 3-4 times in an X and T motion.',
      image: 'images/Products,skin care/Cleanser (2).jpg',
      hoverImage: 'images/Products,skin care/9.jpg'
    },
    {
      id: 'fixing-spray',
      name: 'Moon Lock Fixing Spray',
      category: 'cosmetics',
      subcategory: 'setting spray',
      price: 399,
      rating: 4.9,
      reviewsCount: 165,
      tag: 'Long Wear',
      desc: 'Micro-fine fixing mist designed to bulletproof makeup against humidity, transfer, and fading for a solid 24 hours.',
      benefits: ['Locks makeup down for 24-hour durability', 'Instant matte sebum-blocking finish', 'Superfine aerosol-like dispersion'],
      ingredients: 'Water, Alcohol Denat., PVP, AMP-Acrylates/Allyl Methacrylate Copolymer, Propylene Glycol.',
      directions: 'Mist evenly over finished make-up. Allow to air-dry completely for a locked-down barrier.',
      image: 'images/Products,skin care/cleanser.jpg',
      hoverImage: 'images/Products,skin care/10.jpg'
    },

    // Cosmetics - Eyes
    {
      id: 'moonlash-mascara',
      name: 'Moonlash Lift Mascara',
      category: 'cosmetics',
      subcategory: 'mascara',
      price: 399,
      rating: 4.8,
      reviewsCount: 312,
      tag: 'Bestseller',
      desc: 'Tubing mascara featuring micro-fibres to stretch lashes to astronomical lengths without smudging or flaking.',
      benefits: ['Tubing formula slides off cleanly with warm water', 'Zero smudges or black flakes all day', 'Holds lash curl for 16 hours'],
      ingredients: 'Water, Acrylates Copolymer, Iron Oxides, Copernicia Cerifera Wax, Stearic Acid, Cellulose (Micro-fibres).',
      directions: 'Place the curved wand at lash base. Wiggle and sweep upward to coat lashes from root to tip.',
      image: 'images/Products,skin care/5.jpg',
      hoverImage: 'images/Products,skin care/11.jpg'
    },
    {
      id: 'mirage-palette',
      name: 'Moonlight Mirage Palette',
      category: 'cosmetics',
      subcategory: 'eyeshadow',
      price: 499,
      rating: 4.9,
      reviewsCount: 187,
      tag: 'Premium Palette',
      desc: 'Exquisite 10-pan palette offering ultra-pigmented butter-smooth mattes, satins, and stellar multichrome shimmers.',
      benefits: ['No fallout, butter-like blendable formula', 'Incredible multi-chrome shimmer transitions', 'Curated neutrals and starry highlight tones'],
      ingredients: 'Mica, Talc, Silica, Magnesium Stearate, Caprylic/Capric Triglyceride, Phenoxyethanol.',
      directions: 'Blend matte shades into the crease. Press metallic or multichrome shimmers onto the eyelid with your ring finger.',
      image: 'images/Products,skin care/7.jpg',
      hoverImage: 'images/Products,skin care/12.jpg'
    },
    {
      id: 'liquid-eyeliner',
      name: 'Moonline Liquid Eyeliner',
      category: 'cosmetics',
      subcategory: 'eyeliner',
      price: 399,
      rating: 4.7,
      reviewsCount: 94,
      tag: 'Waterproof',
      desc: 'Precision felt-tip liquid eyeliner designed to lay down clean, ink-black lines with a waterproof, smudge-proof vinyl finish.',
      benefits: ['0.1mm hyper-precise brush tip', '24-hour waterproof vinyl lock', 'Saturated carbon-black pigment'],
      ingredients: 'Water, Acrylates/Ethylhexyl Acrylate Copolymer, Carbon Black, Propylene Glycol, Phenoxyethanol.',
      directions: 'Shake well. Glide the brush along your lash line, flicking upward at the outer corner to create a wing.',
      image: 'images/Products,skin care/8.jpg',
      hoverImage: 'images/Products,skin care/13.jpg'
    },
    {
      id: 'gel-liner',
      name: 'Moonlight Gel Liner',
      category: 'cosmetics',
      subcategory: 'eyeliner',
      price: 399,
      rating: 4.6,
      reviewsCount: 78,
      tag: 'New',
      desc: 'Ultra-creamy gel liner pencil that glides like butter and sets down waterproof to lock the waterline in place all day.',
      benefits: ['Glides without tugging delicate eyelids', 'Safe for waterlines, ophthalmologist approved', 'Includes built-in sharpener at base'],
      ingredients: 'Trimethylsiloxysilicate, Isododecane, Synthetic Wax, Mica, Carbon Black, Iron Oxides.',
      directions: 'Glide along waterline or tightline, or smudge immediately after application for a smoky lash line.',
      shades: ['Starry Black', 'Deep Espresso', 'Champagne Glow'],
      image: 'images/Products,skin care/9.jpg',
      hoverImage: 'images/Products,skin care/14.jpg'
    },
    {
      id: 'brow-pen',
      name: 'Moon Arch Brow Pen',
      category: 'cosmetics',
      subcategory: 'brow',
      price: 399,
      rating: 4.8,
      reviewsCount: 132,
      tag: 'Precision Arch',
      desc: 'Micro-fine brush-tip brow pen that creates realistic, hair-like strokes to build dimensional fullness.',
      benefits: ['Hyper-precise brush draws individual hairs', 'Smudge-proof ink remains all day', 'Fades naturally without turning green/red'],
      ingredients: 'Water, Butylene Glycol, Ammonium Acrylates Copolymer, Phenoxyethanol, Iron Oxides.',
      directions: 'Flick upward through the brows in sparse areas to create realistic hair strokes. Shake before use.',
      shades: ['Soft Taupe', 'Ash Brown', 'Dark Charcoal'],
      image: 'images/Products,skin care/10.jpg',
      hoverImage: 'images/Products,skin care/5.jpg'
    },
    {
      id: 'brow-gel',
      name: 'Moonlight Brow Gel',
      category: 'cosmetics',
      subcategory: 'brow',
      price: 399,
      rating: 4.7,
      reviewsCount: 104,
      tag: 'Strong Hold',
      desc: 'Clear, flake-free strong-hold brow gel that laminates your brow hairs into place for a structured, feathery look.',
      benefits: ['Provides laminated effect without crunch', 'Completely translucent, no white flakes', 'Hydrates brows with Panthenol'],
      ingredients: 'Water, PVP, Alcohol Denat., Propylene Glycol, Panthenol, Phenoxyethanol.',
      directions: 'Brush upward through brow hairs, pressing flat with the wand for a laminated look.',
      image: 'images/Products,skin care/11.jpg',
      hoverImage: 'images/Products,skin care/7.jpg'
    },
    {
      id: 'false-lashes',
      name: 'Moonlight False Lashes',
      category: 'cosmetics',
      subcategory: 'eyeshadow',
      price: 399,
      rating: 4.8,
      reviewsCount: 62,
      tag: 'New',
      desc: 'Premium vegan faux-mink false lashes featuring an ultra-thin clear band for weightless, undetectable wear.',
      benefits: ['Clear flex-band sits comfortably', 'Reusable up to 25 times with care', 'Soft, wispy starry design'],
      ingredients: '100% Synthetic Faux Mink Fibers, Clear Polyurethane Band.',
      directions: 'Trim lash band to fit eyes. Apply lash glue to band. Wait 30 seconds, then place along lash line.',
      image: 'images/Products,skin care/12.jpg',
      hoverImage: 'images/Products,skin care/8.jpg'
    },
    {
      id: 'eyelash-curler',
      name: 'Moonlight Eyelash Curler',
      category: 'cosmetics',
      subcategory: 'beauty tools',
      price: 399,
      rating: 4.9,
      reviewsCount: 145,
      tag: 'Beauty Tool',
      desc: 'Ergonomic gold-plated eyelash curler engineered to curl every single lash with premium cushion pads.',
      benefits: ['Wide curved opening fits multiple eye shapes', 'Soft silicone pads prevent lash pinches', 'Luxury champagne gold styling'],
      ingredients: 'Stainless Steel Body (Gold-Plated), Silicone Cushions.',
      directions: 'Place open curler near lash base. Squeeze gently for 5 seconds. Pump once in the center for a dynamic lift.',
      image: 'images/Products,skin care/13.jpg',
      hoverImage: 'images/Products,skin care/9.jpg'
    },

    // Cosmetics - Lips
    {
      id: 'kiss-tint-collection',
      name: 'Kiss Tint Collection',
      category: 'cosmetics',
      subcategory: 'lip tint',
      price: 299,
      rating: 4.9,
      reviewsCount: 382,
      tag: 'Bestseller',
      desc: 'Hydrating, feather-light lip tint that imparts a fresh, water-stained flush of color that is smudge-proof and long-wearing.',
      benefits: ['Felt-weight water gel tint', 'Infused with soothing rosewater', '6 beautiful stellar shades'],
      ingredients: 'Water, Butylene Glycol, Rosa Damascena Flower Water, Glycerin, Sodium Hyaluronate, Red 33, Yellow 5.',
      directions: 'Glide onto lips, focusing on the center for a dynamic gradient look, or sweep full lips for bold coloring.',
      shades: ['Peach', 'Bare Bloom', 'Sunrise', 'Fresh Cherry', 'Berry Begin', 'Mauve Step'],
      image: 'images/Products,skin care/14.jpg',
      hoverImage: 'images/Products,skin care/10.jpg'
    },
    {
      id: 'matte-story-lipstick',
      name: 'Matte Story Lipstick Collection',
      category: 'cosmetics',
      subcategory: 'lipstick',
      price: 399,
      rating: 4.8,
      reviewsCount: 224,
      tag: 'Matte Story',
      desc: 'Comfortable, velvet-matte lipstick that deposits rich, high-saturation color while keeping lips soft and hydrated.',
      benefits: ['Velvety matte feel, zero lip drying', 'High-density color payoff in 1 swipe', 'Enriched with nourishing jojoba esters'],
      ingredients: 'Dimethicone, Silica, Jojoba Seed Oil, Carnauba Wax, Vitamin E, Iron Oxides, Red 7.',
      directions: 'Apply directly from the bullet onto clean lips, starting at the cupid\'s bow and working outward.',
      shades: ['Foundation Nude', 'Daily Rose', 'Soft Coral', 'Signature Red', 'Deep Mauve', 'First Wine'],
      image: 'images/Products,skin care/5.jpg',
      hoverImage: 'images/Products,skin care/11.jpg'
    },
    {
      id: 'glow-finish-lipgloss',
      name: 'Glow Finish Lip Gloss Collection',
      category: 'cosmetics',
      subcategory: 'lip gloss',
      price: 199,
      rating: 4.9,
      reviewsCount: 298,
      tag: 'Bestseller',
      desc: 'Stunning glass-finish lip gloss that delivers cushiony, non-sticky high shine combined with maximum lip comfort.',
      benefits: ['Brilliant mirror-like high shine', 'Zero sticky residue, ultra cushiony', 'Hydrates with sweet almond oil'],
      ingredients: 'Polybutene, Sweet Almond Oil, Caprylic/Capric Triglyceride, Silica, Vitamin E, Mica, Flavors.',
      directions: 'Sweep gloss applicator over bare lips or layer over your favorite Kiss Tint for elevated dimensions.',
      shades: ['Clear Start', 'Soft Pink Glow', 'Peach Finish', 'Rose Shine', 'Bare Glow', 'Fresh Dew'],
      image: 'images/Products,skin care/7.jpg',
      hoverImage: 'images/Products,skin care/12.jpg'
    }
  ];

  /* ── 2. Global State Managers (LocalStorage) ─────────────── */
  const CART_KEY = 'MoonlightEtoile_cart';
  const WISHLIST_KEY = 'MoonlightEtoile_wishlist';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartElements();
  }

  function getWishlist() {
    try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
    catch { return []; }
  }

  function saveWishlist(wishlist) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    updateWishlistStates();
  }

  /* ── 3. UI Synchronization ────────────────────────────── */
  function updateCartElements() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    // Update nav counters
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });

    // If on the cart page, trigger its refresh
    if (window.MoonlightEtoile.refreshCartPage) {
      window.MoonlightEtoile.refreshCartPage();
    }
  }

  function updateWishlistStates() {
    const wishlist = getWishlist();
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
      const id = btn.dataset.id;
      const isStarred = wishlist.includes(id);
      btn.classList.toggle('active', isStarred);
      const svg = btn.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', isStarred ? 'var(--color-rose)' : 'none');
        svg.setAttribute('stroke', isStarred ? 'var(--color-rose)' : 'currentColor');
      }
    });
  }

  /* ── 4. Global Core E-Commerce API ──────────────────────── */
  window.MoonlightEtoile = {
    products: products,
    getCart: getCart,
    getWishlist: getWishlist,

    addToCart: function (id, shade, qty = 1) {
      const product = products.find(p => p.id === id);
      if (!product) return;

      const cart = getCart();
      const key = id + (shade ? '-' + shade.replace(/\s+/g, '_') : '');
      const existing = cart.find(i => i.key === key);

      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({
          key: key,
          id: id,
          name: product.name,
          price: product.price,
          image: product.image,
          shade: shade || '',
          qty: qty
        });
      }

      saveCart(cart);
      this.showToast(`${product.name}${shade ? ' (' + shade + ')' : ''} added to cart`);
      triggerCartAnim();
    },

    updateCartQty: function (key, qty) {
      let cart = getCart();
      const item = cart.find(i => i.key === key);
      if (item) {
        item.qty = Math.max(1, parseInt(qty) || 1);
        saveCart(cart);
      }
    },

    removeFromCart: function (key) {
      let cart = getCart().filter(i => i.key !== key);
      saveCart(cart);
      this.showToast(`Item removed from cart`);
    },

    toggleWishlist: function (id) {
      let wishlist = getWishlist();
      const product = products.find(p => p.id === id);
      if (!product) return;

      const index = wishlist.indexOf(id);
      if (index > -1) {
        wishlist.splice(index, 1);
        this.showToast(`Removed ${product.name} from wishlist`);
      } else {
        wishlist.push(id);
        this.showToast(`Added ${product.name} to wishlist`);
      }
      saveWishlist(wishlist);
    },

    /* ── Toast Notifications ────────────────────────────────── */
    showToast: function (message) {
      let toastContainer = document.querySelector('.toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
      }

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `<span class="toast__dot"></span><span>${message}</span>`;
      toastContainer.appendChild(toast);

      // Force layout calculation for transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
      });

      setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
      }, 2500);
    },

    /* ── Quick View Modal ────────────────────────────────────── */
    openQuickView: function (id) {
      const product = products.find(p => p.id === id);
      if (!product) return;

      let modal = document.getElementById('quickview-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quickview-modal';
        modal.className = 'quickview';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        document.body.appendChild(modal);
      }

      const shadesHtml = product.shades ? `
        <div class="quickview__shades">
          <p class="quickview__option-label">Select Shade</p>
          <div class="quickview__shade-selector">
            ${product.shades.map((s, idx) => `
              <button class="shade-dot ${idx === 0 ? 'active' : ''}" data-shade="${s}" title="${s}"></button>
            `).join('')}
          </div>
          <p class="selected-shade-name">${product.shades[0]}</p>
        </div>
      ` : '';

      modal.innerHTML = `
        <div class="quickview__backdrop" onclick="window.MoonlightEtoile.closeQuickView()"></div>
        <div class="quickview__content">
          <button class="quickview__close" onclick="window.MoonlightEtoile.closeQuickView()" aria-label="Close modal">&times;</button>
          <div class="quickview__grid">
            <div class="quickview__gallery">
              <img src="${product.image}" alt="${product.name}" class="quickview__main-img">
            </div>
            <div class="quickview__details">
              <span class="t-label quickview__badge">${product.subcategory}</span>
              <h2 class="quickview__title">${product.name}</h2>
              <div class="quickview__rating">
                <span class="stars">★★★★★</span>
                <span class="count">(${product.reviewsCount} reviews)</span>
              </div>
              <p class="quickview__price">&#8369;${product.price.toLocaleString()}</p>
              <p class="quickview__desc">${product.desc}</p>
              
              ${shadesHtml}

              <div class="quickview__actions">
                <button class="btn btn--primary" id="qv-add-btn">Add to Cart</button>
                <a href="detail.html?id=${product.id}" class="quickview__more-link">View details</a>
              </div>
            </div>
          </div>
        </div>
      `;

      // Set up shade selector listeners inside quickview
      if (product.shades) {
        const dots = modal.querySelectorAll('.shade-dot');
        const shadeText = modal.querySelector('.selected-shade-name');
        dots.forEach(dot => {
          dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            shadeText.textContent = dot.dataset.shade;
          });
        });
      }

      // Add to cart listener
      const addBtn = modal.querySelector('#qv-add-btn');
      addBtn.addEventListener('click', () => {
        const selectedDot = modal.querySelector('.shade-dot.active');
        const shade = selectedDot ? selectedDot.dataset.shade : '';
        window.MoonlightEtoile.addToCart(product.id, shade);
        window.MoonlightEtoile.closeQuickView();
      });

      document.body.classList.add('modal-open');
      modal.classList.add('open');
    },

    closeQuickView: function () {
      const modal = document.getElementById('quickview-modal');
      if (modal) {
        modal.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    }
  };

  /* ── 5. Standard Global Interactions ─────────────────────── */
  
  // Dynamic Scroll Reveal system
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  // Hamburger / Mobile Navigation
  const hamburger = document.getElementById('hamburger-btn') || document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobile-nav') || document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    const toggleMenu = () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleMenu);

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Navbar highlight based on URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Animated cart shake on add to cart
  function triggerCartAnim() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('shake');
      cartIcon.addEventListener('animationend', () => {
        cartIcon.classList.remove('shake');
      }, { once: true });
    }
  }

  // Active hover/scale adjustments on buttons (Emil standard)
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.96)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // Initialize
  updateCartElements();
  updateWishlistStates();

})();
