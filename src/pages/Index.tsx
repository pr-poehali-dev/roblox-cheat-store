import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'ESP Мастер',
      description: 'Видь всех игроков через стены и предметы',
      price: '299₽',
      features: ['Видимость через стены', 'Показ здоровья', 'Показ предметов', 'Настройка цветов'],
      rating: 4.8,
      reviews: 156,
      badge: 'Популярно'
    },
    {
      id: 2,
      name: 'Аимбот Про',
      description: 'Автоматическое прицеливание для точных попаданий',
      price: '499₽',
      features: ['Умное прицеливание', 'Настройка скорости', 'FOV контроль', 'Сглаживание'],
      rating: 4.9,
      reviews: 243,
      badge: 'Топ'
    },
    {
      id: 3,
      name: 'Спид Хак',
      description: 'Увеличь скорость передвижения и прыжков',
      price: '199₽',
      features: ['Ускорение бега', 'Высокие прыжки', 'Быстрая плавка', 'Защита от бана'],
      rating: 4.6,
      reviews: 98,
      badge: 'Новинка'
    },
    {
      id: 4,
      name: 'Полный Пакет',
      description: 'Все функции в одном наборе - максимальная мощь',
      price: '799₽',
      features: ['Все ESP функции', 'Полный аимбот', 'Спид хак', 'VIP поддержка'],
      rating: 5.0,
      reviews: 412,
      badge: 'Лучший выбор'
    }
  ];

  const reviews = [
    { name: 'Никита М.', rating: 5, text: 'Супер работает! Легко установил и сразу начал побеждать 🔥', date: '2 дня назад' },
    { name: 'Артём К.', rating: 5, text: 'Лучший чит что я пробовал! Поддержка отвечает быстро', date: '5 дней назад' },
    { name: 'Даша Л.', rating: 4, text: 'Хороший функционал, но хотелось бы больше настроек', date: '1 неделя назад' },
    { name: 'Максим В.', rating: 5, text: 'Работает идеально! Друзьям уже посоветовал', date: '2 недели назад' }
  ];

  const guides = [
    { title: '🎮 Первая установка', description: 'Пошаговая инструкция для новичков', duration: '5 мин' },
    { title: '⚙️ Настройка ESP', description: 'Как настроить отображение игроков', duration: '3 мин' },
    { title: '🎯 Настройка аимбота', description: 'Оптимальные параметры прицеливания', duration: '4 мин' },
    { title: '🛡️ Защита от бана', description: 'Как играть безопасно', duration: '6 мин' }
  ];

  const news = [
    { title: 'Обновление v2.5', date: '10 дек 2024', text: 'Добавлены новые функции ESP и улучшена производительность' },
    { title: 'Новогодняя скидка', date: '5 дек 2024', text: 'Скидка 30% на все пакеты до конца месяца! 🎄' },
    { title: 'Новый модуль', date: '1 дек 2024', text: 'Выпущен модуль "Телепорт" для премиум пользователей' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-blue-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              RobloxPro
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукты</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#guides" className="text-sm font-medium hover:text-primary transition-colors">Гайды</a>
            <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">Поддержка</a>
          </nav>
          <Button className="animate-scale-in">
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                🔥 Более 10,000 довольных игроков
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Стань <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">лучшим</span> в Roblox
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональные инструменты для улучшения игры. Легкая установка, регулярные обновления и круглосуточная поддержка.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Выбрать продукт
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">4.9</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <div className="relative w-full h-96 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 flex items-center justify-center animate-float">
                <Icon name="Trophy" size={120} className="text-white/90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-white/50">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">Наши продукты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выбери свой стиль игры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый продукт создан с любовью и протестирован тысячами игроков
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProduct(product.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Zap" size={24} className="text-white" />
                    </div>
                    <Badge className="bg-gradient-to-r from-accent to-orange-400 text-white border-0">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-foreground">{product.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{product.reviews} отзывов</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground">/ месяц</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="ShoppingBag" size={16} className="mr-2" />
                    Купить сейчас
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят игроки</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Тысячи довольных пользователей уже улучшили свою игру
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-xs text-muted-foreground">{review.date}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Гибкие тарифы</h2>
            <p className="text-xl text-muted-foreground">
              Выбери подписку которая подходит именно тебе
            </p>
          </div>
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="monthly">Месяц</TabsTrigger>
              <TabsTrigger value="annual">Год (-20%)</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="space-y-4">
              {products.map((product, index) => (
                <Card key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{product.price}</div>
                      <div className="text-sm text-muted-foreground">в месяц</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={14} className="text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="annual" className="space-y-4">
              {products.map((product, index) => (
                <Card key={product.id} className="animate-fade-in border-primary" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{parseInt(product.price) * 12 * 0.8}₽</div>
                      <div className="text-sm text-muted-foreground line-through">{parseInt(product.price) * 12}₽</div>
                      <div className="text-xs text-primary font-semibold">Экономия 20%</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={14} className="text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="guides" className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">Обучение</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Гайды и инструкции</h2>
            <p className="text-xl text-muted-foreground">
              Пошаговые руководства для быстрого старта
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {guides.map((guide, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div>
                      <div className="text-lg font-semibold">{guide.title}</div>
                      <div className="text-sm text-muted-foreground">{guide.description}</div>
                    </div>
                    <Badge variant="outline">{guide.duration}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <div className="space-y-4">
                    <p>Подробная инструкция с видео и скриншотами. Следуй простым шагам и всё получится!</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary">
                        <Icon name="PlayCircle" size={16} className="mr-2" />
                        Смотреть видео
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="FileText" size={16} className="mr-2" />
                        Читать текст
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">Новости</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Последние обновления</h2>
            <p className="text-xl text-muted-foreground">
              Следи за новыми функциями и релизами
            </p>
          </div>
          <div className="space-y-4">
            {news.map((item, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription>{item.text}</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4">{item.date}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">Поддержка</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Мы всегда на связи</h2>
            <p className="text-xl text-muted-foreground">
              Свяжись с нами любым удобным способом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="animate-fade-in hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <CardTitle>Онлайн-чат</CardTitle>
                <CardDescription>Ответим за 5 минут</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full">Начать чат</Button>
              </CardFooter>
            </Card>
            <Card className="animate-fade-in hover:shadow-xl transition-all hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>support@robloxpro.ru</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">Написать письмо</Button>
              </CardFooter>
            </Card>
            <Card className="animate-fade-in hover:shadow-xl transition-all hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Send" size={32} className="text-white" />
                </div>
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Быстрая поддержка 24/7</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">Открыть Telegram</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Icon name="Gamepad2" size={28} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">RobloxPro</div>
                <div className="text-sm text-white/80">Стань лучшим игроком</div>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white/80 transition-colors">Пользовательское соглашение</a>
              <a href="#" className="hover:text-white/80 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white/80 transition-colors">Контакты</a>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20 text-sm text-white/70">
            © 2024 RobloxPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
