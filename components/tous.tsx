import React, { useState, useCallback, memo, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable, Animated, Modal, TextInput, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { AntDesign, Feather } from '@expo/vector-icons';

const products = {
  fruits: [
    {
      id: '1',
      name: 'Organic Apples',
      price: 2.99,
      unit: 'lb',
      stock: 50,
      image: 'https://api.a0.dev/assets/image?text=fresh%20organic%20red%20apples%20on%20white%20background&aspect=1:1'
    },
    {
      id: '2',
      name: 'Fresh Bananas',
      price: 1.99,
      unit: 'lb',
      stock: 40,
      image: 'https://api.a0.dev/assets/image?text=organic%20yellow%20bananas%20bunch&aspect=1:1'
    },
    {
      id: '3',
      name: 'Strawberries',
      price: 4.99,
      unit: 'box',
      stock: 30,
      image: 'https://api.a0.dev/assets/image?text=fresh%20red%20strawberries%20in%20basket&aspect=1:1'
    },
  ],
  legumes: [
    {
      id: '4',
      name: 'Green Lentils',
      price: 3.49,
      unit: 'lb',
      stock: 60,
      image: 'https://api.a0.dev/assets/image?text=organic%20green%20lentils%20on%20wooden%20surface&aspect=1:1'
    },
    {
      id: '5',
      name: 'Chickpeas',
      price: 2.99,
      unit: 'lb',
      stock: 45,
      image: 'https://api.a0.dev/assets/image?text=organic%20chickpeas%20in%20bowl&aspect=1:1'
    },
    {
      id: '6',
      name: 'Black Beans',
      price: 2.79,
      unit: 'lb',
      stock: 55,
      image: 'https://api.a0.dev/assets/image?text=organic%20black%20beans%20on%20rustic%20background&aspect=1:1'
    },
  ]
};

const blogPosts = [
  {
    id: '1',
    title: "5 Benefits of Eating Organic",
    shortDescription: "Organic food provides numerous benefits to your health such as reducing exposure to harmful chemicals and promoting sustainable agriculture. Discover the natural benefits of choosing organic.",
    content: "Full Article Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec in sodales lorem. Phasellus sit amet nulla sed felis convallis malesuada.",
    image: "https://api.a0.dev/assets/image?text=organic%20blog%20post%20benefits&aspect=4:3",
    tags: ["Health", "Organic"]
  },
  { 
    id: '2',
    title: "The Ultimate Guide to Fresh Fruits",
    shortDescription: "Explore the vibrant world of fresh fruits, their seasons, benefits, and how to incorporate more fruits into your diet for a healthier lifestyle.",
    content: "Full Article Content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "https://api.a0.dev/assets/image?text=organic%20blog%20fruits&aspect=4:3",
    tags: ["Fruits", "Guide"]
  },
  {
    id: '3',
    title: "Organic Legumes: A Nutritional Powerhouse",
    shortDescription: "Discover the various legumes that can fuel your day. Learn about their nutritional benefits and how organic legumes are grown naturally.",
    content: "Full Article Content: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: "https://api.a0.dev/assets/image?text=organic%20blog%20legumes&aspect=4:3",
    tags: ["Legumes", "Nutrition"]
  }
];

const Header = memo(() => (
  <View style={styles.header}>
    <Image
      source={{ uri: 'https://api.a0.dev/assets/image?text=organic%20food%20store%20logo%20minimal%20design&aspect=1:1' }}
      style={styles.logo}
      contentFit="contain"
      transition={1000}
    />
    <Text style={styles.headerTitle}>Nature's Bounty</Text>
  </View>
));

const TabBar = memo(({ activeTab, onTabPress }) => {
  const tabs = [
    { key: 'home', icon: 'home', label: 'Home' },
    { key: 'market', icon: 'shopping-bag', label: 'Market' },
    { key: 'blog', icon: 'book-open', label: 'Blog' },
    { key: 'contact', icon: 'mail', label: 'Contact' },
    { key: 'cart', icon: 'shopping-cart', label: 'Cart' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[
            styles.tab,
            activeTab === tab.key && styles.activeTab
          ]}
          onPress={() => onTabPress(tab.key)}
        >
          <Feather
            name={tab.icon}
            size={24}
            color={activeTab === tab.key ? '#4CAF50' : '#666'}
          />
          <Text style={[
            styles.tabLabel,
            activeTab === tab.key && styles.activeTabLabel
          ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});

const ProductCard = memo(({ product, quantity, onUpdateQuantity }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: product.image }}
      style={styles.image}
      contentFit="cover"
      transition={1000}
    />
    <View style={styles.cardContent}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)} / {product.unit}</Text>
      <Text style={styles.stock}>Available: {product.stock} {product.unit}</Text>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity 
          style={styles.quantityButton}
          onPress={() => onUpdateQuantity(product.id, false)}
        >
          <AntDesign name="minus" size={20} color="#FF6B6B" />
        </TouchableOpacity>
        
        <Text style={styles.quantity}>{quantity}</Text>
        
        <TouchableOpacity 
          style={styles.quantityButton}
          onPress={() => onUpdateQuantity(product.id, true)}
        >
          <AntDesign name="plus" size={20} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
));

const SectionHeader = memo(({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
));

const BlogCard = memo(({ post, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = useCallback(() => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  }, [scale]);

  const handlePressOut = useCallback(() => {
    Animated.spring(scale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  }, [scale]);

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.blogCard, { transform: [{ scale }] }]}>
        <Image
          source={{ uri: post.image }}
          style={styles.blogImage}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.blogContent}>
          <Text style={styles.blogTitle} numberOfLines={2}>{post.title}</Text>
          <Text style={styles.blogDescription} numberOfLines={3}>{post.shortDescription}</Text>
          <View style={styles.tagContainer}>
            {post.tags.map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <Pressable style={styles.readMoreButton} onPress={onPress}>
            <Text style={styles.readMoreText}>Read More</Text>
            <AntDesign name="arrowright" size={16} color="#4CAF50" />
          </Pressable>
        </View>
      </Animated.View>
    </Pressable>
  );
});

export default function MarketplaceScreen() {
  const [cart, setCart] = useState({});
  const [activeTab, setActiveTab] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [subject, setSubject] = useState('');
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (activeTab === 'home') {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [activeTab]);

  const sendContactForm = useCallback(() => {
    toast.success("Message sent!");
    setFullName('');
    setEmail('');
    setTelephone('');
    setSubject('');
  }, []);

  const updateQuantity = useCallback((id, increment) => {
    setCart(prevCart => {
      const currentQuantity = prevCart[id] || 0;
      const product = products.fruits.concat(products.legumes).find(p => p.id === id);
      const newQuantity = increment 
        ? Math.min(currentQuantity + 1, product.stock)
        : Math.max(currentQuantity - 1, 0);
      
      return {
        ...prevCart,
        [id]: newQuantity
      };
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        {activeTab === 'home' ? (
          <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.scrollContainer}>
              {/* Advertisement Carousel */}
              <View style={styles.heroContainer}>
                <ScrollView
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  style={styles.carousel}
                >
                  {[
                    'vibrant%20organic%20produce%20display%20in%20modern%20market',
                    'fresh%20fruits%20and%20vegetables%20arranged%20colorfully',
                    'modern%20advertisement%20for%20organic%20market'
                  ].map((prompt, index) => (
                    <Image
                      key={index}
                      source={{ uri: `https://api.a0.dev/assets/image?text=${prompt}&aspect=16:9` }}
                      style={styles.carouselImage}
                      contentFit="cover"
                      transition={1000}
                    />
                  ))}
                </ScrollView>
              </View>

              {/* Capital Points */}
              <View style={styles.featuresContainer}>
                {[
                  { icon: 'droplet', title: 'Freshness', description: 'Daily picked produce' },
                  { icon: 'trash-2', title: 'Zero Waste', description: 'Eco-friendly practices' },
                  { icon: 'leaf', title: 'Organic', description: '100% certified organic produce' },
                  { icon: 'truck', title: 'Fast Delivery', description: 'Quick delivery to your door' }
                ].map((feature, index) => (
                  <View key={index} style={styles.featureCard}>
                    <Feather name={feature.icon} size={32} color="#4CAF50" />
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                ))}
              </View>

              {/* Top Fruits */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top Fruits</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.row}>
                    {products.fruits.slice(0, 2).map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product}
                        quantity={cart[product.id] || 0}
                        onUpdateQuantity={updateQuantity}
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>

              {/* Top Vegetables */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top Vegetables</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.row}>
                    {products.legumes.slice(0, 2).map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product}
                        quantity={cart[product.id] || 0}
                        onUpdateQuantity={updateQuantity}
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>

              {/* Testimonials */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>What Our Customers Say</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {[
                    {
                      name: 'Sarah Johnson',
                      text: 'The quality of produce is exceptional. I love that everything is organic!',
                      rating: 5,
                      image: 'https://api.a0.dev/assets/image?text=happy%20customer%20portrait%20natural%20lighting&aspect=1:1'
                    },
                    {
                      name: 'Michael Chen',
                      text: 'Fast delivery and excellent customer service. Will definitely order again!',
                      rating: 5,
                      image: 'https://api.a0.dev/assets/image?text=satisfied%20customer%20portrait%20professional&aspect=1:1'
                    },
                    {
                      name: 'Emma Davis',
                      text: 'Love the zero-waste packaging. Finally a store that cares about the environment!',
                      rating: 5,
                      image: 'https://api.a0.dev/assets/image?text=happy%20customer%20female%20portrait%20natural&aspect=1:1'
                    }
                  ].map((testimonial, index) => (
                    <View key={index} style={styles.testimonialCard}>
                      <Image
                        source={{ uri: testimonial.image }}
                        style={styles.testimonialImage}
                        contentFit="cover"
                        transition={1000}
                      />
                      <View style={styles.testimonialContent}>
                        <Text style={styles.testimonialName}>{testimonial.name}</Text>
                        <View style={styles.ratingContainer}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <AntDesign key={i} name="star" size={16} color="#FFD700" />
                          ))}
                        </View>
                        <Text style={styles.testimonialText}>{testimonial.text}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>

              {/* Partners */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Partners</Text>
                <View style={styles.partnersGrid}>
                  {[
                    'organic%20farm%20logo%20minimal',
                    'eco%20friendly%20delivery%20service%20logo',
                    'sustainable%20packaging%20company%20logo',
                    'local%20farmers%20association%20logo'
                  ].map((prompt, index) => (
                    <Image
                      key={index}
                      source={{ uri: `https://api.a0.dev/assets/image?text=${prompt}&aspect=1:1` }}
                      style={styles.partnerLogo}
                      contentFit="contain"
                      transition={1000}
                    />
                  ))}
                </View>
              </View>

              {/* Featured Blog Posts */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Latest From Our Blog</Text>
                <View style={styles.blogGrid}>
                  {blogPosts.slice(0, 2).map(post => (
                    <BlogCard key={post.id} post={post} onPress={() => setSelectedBlog(post)} />
                  ))}
                </View>
              </View>
            </ScrollView>
          </Animated.View>
        ) : activeTab === 'market' ? (
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.scrollContainer}>
            <SectionHeader title="Fresh Fruits" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.row}>
                {products.fruits.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    quantity={cart[product.id] || 0}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </View>
            </ScrollView>
            <SectionHeader title="Organic Legumes" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.row}>
                {products.legumes.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    quantity={cart[product.id] || 0}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </View>
            </ScrollView>
          </ScrollView>
        ) : activeTab === 'blog' ? (
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.scrollContainer}>
            <View style={styles.blogGrid}>
              {blogPosts.map(post => (
                <BlogCard key={post.id} post={post} onPress={() => setSelectedBlog(post)} />
              ))}
            </View>
          </ScrollView>
        ) : activeTab === 'contact' ? (
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.scrollContainer}>
            <View style={styles.contactContainer}>
              <Text style={styles.contactTitle}>Contact</Text>
              <Text style={styles.contactDescription}>
                Let us know if you have any comments to make or partnership proposals.
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Telephone Number"
                value={telephone}
                onChangeText={setTelephone}
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Subject"
                value={subject}
                onChangeText={setSubject}
              />
              <TouchableOpacity style={styles.sendButton} onPress={sendContactForm}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} page coming soon...
            </Text>
          </View>
        )}
      </View>
      <TabBar activeTab={activeTab} onTabPress={setActiveTab} />
      {selectedBlog && (
        <Modal
          visible={!!selectedBlog}
          animationType="slide"
          transparent
          onRequestClose={() => setSelectedBlog(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ScrollView>
                <Image 
                  source={{ uri: selectedBlog.image }}
                  style={styles.modalImage}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalTitle}>{selectedBlog.title}</Text>
                  <View style={styles.modalTagContainer}>
                    {selectedBlog.tags.map(tag => (
                      <View key={tag} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                      </View>
                    ))}
                  </View>
                  <Text style={styles.modalContentText}>{selectedBlog.content}</Text>
                </View>
              </ScrollView>
              <TouchableOpacity style={styles.modalCloseButton} onPress={() => setSelectedBlog(null)}>
                <AntDesign name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    color: '#2C3E50',
  },
  scrollContainer: {
    flex: 1,
  },
  sectionHeader: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2C3E50',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  card: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#f0f0f0',
  },
  cardContent: {
    padding: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '500',
    marginBottom: 4,
  },
  stock: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 12,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    minWidth: 30,
    textAlign: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  activeTab: {
    transform: [{ scale: 1.1 }],
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  activeTabLabel: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  blogGrid: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  blogCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 4,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  blogImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
  },
  blogContent: {
    padding: 12,
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  blogDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 12,
    lineHeight: 20,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 6,
  },
  readMoreText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
    marginRight: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#e0f2f1',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 10,
    color: '#00796b',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
  },
  modalImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  modalTextContainer: {
    padding: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  modalContentText: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 22,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 5,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  placeholderText: {
    fontSize: 18,
    color: '#7f8c8d',
  },
  heroContainer: {
    height: 200,
    marginBottom: 16,
  },
  carousel: {
    height: 200,
  },
  carouselImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  featureCard: {
    width: '50%',
    padding: 16,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginTop: 8,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  testimonialCard: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  testimonialImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 12,
  },
  testimonialContent: {
    alignItems: 'flex-start',
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  testimonialText: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
  partnersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 8,
  },
  partnerLogo: {
    width: '45%',
    height: 100,
    margin: 8,
  },
  contactContainer: {
    padding: 16,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  contactDescription: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});