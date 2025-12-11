import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [subscriptionPeriod, setSubscriptionPeriod] = useState(2);

  const periods = [
    { days: 7, label: '7 дней', price: 150, discount: 0, oldPrice: 0 },
    { days: 14, label: '14 дней', price: 285, discount: 5, oldPrice: 300 },
    { days: 30, label: '1 месяц', price: 540, discount: 10, oldPrice: 600 },
    { days: 60, label: '2 месяца', price: 1020, discount: 15, oldPrice: 1200 },
    { days: 0, label: 'Навсегда', price: 3750, discount: 25, oldPrice: 5000 }
  ];

  const calculatePrice = (periodIndex: number) => {
    return periods[periodIndex].price;
  };

  const getOldPrice = (periodIndex: number) => {
    return periods[periodIndex].oldPrice;
  };

  const getDiscount = (periodIndex: number) => {
    return periods[periodIndex].discount;
  };

  const features = [
    {
      category: 'Прицеливание',
      icon: 'Target',
      color: 'from-primary to-secondary',
      items: [
        { name: 'AimBot', description: 'Автоматическое прицеливание на врагов' },
        { name: 'TriggerBot', description: 'Автоматическая стрельба при наведении' },
        { name: 'SilentAim', description: 'Невидимое прицеливание для стримов' },
        { name: 'Predict', description: 'Предсказание движения цели' },
        { name: 'Lock Parts', description: 'Выбор части тела для прицеливания' },
        { name: 'Smooth', description: 'Плавность наведения прицела' },
        { name: 'Fov Visible', description: 'Видимость зоны прицеливания' }
      ]
    },
    {
      category: 'Визуализация',
      icon: 'Eye',
      color: 'from-secondary to-accent',
      items: [
        { name: 'ESP', description: 'Видимость игроков через стены' },
        { name: 'Distance', description: 'Отображение дистанции до игроков' },
        { name: 'NickName', description: 'Показ имён игроков' },
        { name: 'Health', description: 'Индикатор здоровья врагов' },
        { name: 'Skeleton', description: 'Скелетон игроков' },
        { name: 'Tracers', description: 'Линии к игрокам' },
        { name: 'StreamProof', description: 'Защита от обнаружения на стриме' }
      ]
    },
    {
      category: 'Передвижение',
      icon: 'Zap',
      color: 'from-accent to-primary',
      items: [
        { name: 'SpectatePlayer', description: 'Наблюдение за игроками' },
        { name: 'Teleport to player', description: 'Телепорт к любому игроку' },
        { name: 'Teleport to coordinate', description: 'Телепорт по координатам' },
        { name: 'Fly', description: 'Режим полёта' },
        { name: 'Noclip', description: 'Проход сквозь стены' },
        { name: 'SpeedHack', description: 'Увеличение скорости бега' },
        { name: 'JumpPower', description: 'Супер прыжки' }
      ]
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

  const supportTeam = [
    { 
      name: 'Shizu', 
      telegram: '@GlDrawElements',
      avatar: 'https://cdn.poehali.dev/projects/6103f50e-ced6-4439-a4e1-c6dd915768e0/files/77bcda6c-df37-49e4-9eba-a84f51e1ce67.jpg',
      role: 'Старший специалист'
    },
    { 
      name: 'Belka', 
      telegram: '@Kosty2323',
      avatar: 'https://cdn.poehali.dev/projects/6103f50e-ced6-4439-a4e1-c6dd915768e0/files/d3f946e5-dead-47c9-81a3-d5b86de23888.jpg',
      role: 'Техподдержка'
    },
    { 
      name: 'KripKripo4ek', 
      telegram: '@KripKripo1ek',
      avatar: 'https://cdn.poehali.dev/projects/6103f50e-ced6-4439-a4e1-c6dd915768e0/files/207f5561-9219-4a50-8aa6-8d7cb930dced.jpg',
      role: 'Техподдержка'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        
        <div className="absolute top-10 right-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute top-2/3 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/4 right-20 w-2 h-2 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '1.8s' }}></div>
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Roblox-Cheat
              </span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Функции</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
              <a href="#guides" className="text-sm font-medium hover:text-primary transition-colors">Гайды</a>
              <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">Поддержка</a>
            </nav>
            <Button className="animate-scale-in" onClick={() => setLoginOpen(true)}>
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
                  <Button 
                    size="lg" 
                    className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    onClick={() => setPurchaseOpen(true)}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Выбрать продукт
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8"
                    onClick={() => setDemoOpen(true)}
                  >
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

        <section id="features" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-primary text-white">Функционал</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Всё что нужно для победы</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                17 мощных функций в одном чите — от прицеливания до телепортации
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {features.map((category, categoryIndex) => (
                <Card 
                  key={categoryIndex} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 hover:border-primary bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${categoryIndex * 0.15}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon name={category.icon as any} size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-2xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="group/item">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                              <Icon name="Check" size={14} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm group-hover/item:text-primary transition-colors">{item.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      onClick={() => setPurchaseOpen(true)}
                    >
                      <Icon name="ShoppingBag" size={16} className="mr-2" />
                      Купить доступ
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
                <Card key={index} className="animate-fade-in hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
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

        <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
          <div className="container max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-accent text-white">Покупка</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Один чит — все возможности</h2>
              <p className="text-xl text-muted-foreground">
                Выбери период подписки и получи полный доступ ко всем функциям
              </p>
            </div>
            
            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name="Zap" size={32} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">Roblox-Cheat Ultimate</CardTitle>
                    <CardDescription className="text-base">Все функции в одном пакете</CardDescription>
                  </div>
                </div>
                
                <div className="space-y-6 pt-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Label className="text-base font-semibold">Выбери период подписки:</Label>
                      <Badge variant="outline" className="text-lg px-4 py-1">{periods[subscriptionPeriod].label}</Badge>
                    </div>
                    <Slider
                      value={[subscriptionPeriod]}
                      onValueChange={(value) => setSubscriptionPeriod(value[0])}
                      max={4}
                      step={1}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      {periods.map((p, i) => (
                        <span key={i} className={i === subscriptionPeriod ? 'text-primary font-semibold' : ''}>
                          {p.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      {getOldPrice(subscriptionPeriod) > 0 && (
                        <div className="text-2xl font-bold text-muted-foreground line-through">
                          {getOldPrice(subscriptionPeriod)}₽
                        </div>
                      )}
                      <div className="text-5xl font-bold text-primary">
                        {calculatePrice(subscriptionPeriod)}₽
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {periods[subscriptionPeriod].days === 0 ? 'Единоразовый платёж' : `${periods[subscriptionPeriod].label} доступа`}
                    </div>
                    {getDiscount(subscriptionPeriod) > 0 && (
                      <Badge className="mt-2 bg-gradient-to-r from-accent to-orange-400 text-white border-0">
                        🔥 Скидка {getDiscount(subscriptionPeriod)}%
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm font-semibold mb-3">Что входит:</div>
                  {['ESP Мастер - видимость через стены', 'Аимбот Про - автоприцеливание', 'Спид Хак - ускорение персонажа', 'Все будущие обновления', 'VIP поддержка 24/7', 'Защита от бана'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={14} className="text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  className="w-full text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => setPurchaseOpen(true)}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить за {calculatePrice(subscriptionPeriod)}₽
                </Button>
                <p className="text-xs text-center text-muted-foreground">Безопасная оплата • Мгновенная активация • Лучшие на рынке</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="video" className="py-20 px-4">
          <div className="container max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-primary text-white">Демонстрация</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Смотри как это работает</h2>
              <p className="text-xl text-muted-foreground">
                Видео-обзор всех возможностей чита
              </p>
            </div>
            
            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative">
                <iframe 
                  src="https://vkvideo.ru/video_ext.php?oid=-229092943&id=456239125&hash=020f569c96e328dd" 
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>
        </section>

        <section id="guides" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
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
                  className="border rounded-xl px-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow animate-fade-in"
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
                        <Button size="sm" className="bg-primary" onClick={() => setDemoOpen(true)}>
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
                <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Команда поддержки</h2>
              <p className="text-xl text-muted-foreground">
                Наши специалисты всегда готовы помочь в Telegram
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportTeam.map((member, index) => (
                <Card key={index} className="animate-fade-in hover:shadow-xl transition-all hover:-translate-y-1 bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-br from-primary to-secondary">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-sm">{member.role}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col gap-2">
                    <p className="text-sm text-muted-foreground">{member.telegram}</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      onClick={() => window.open(`https://t.me/${member.telegram.replace('@', '')}`, '_blank')}
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Написать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center animate-fade-in">
              <Card className="bg-gradient-to-r from-primary to-secondary text-white border-none max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-3xl mb-2">Мы сидим тут 💬</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Присоединяйся к нашему Telegram-каналу для новостей, обновлений и общения с комьюнити
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8"
                    onClick={() => window.open('https://t.me/your_channel', '_blank')}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Перейти в Telegram
                  </Button>
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
                  <div className="text-2xl font-bold">Roblox-Cheat</div>
                  <div className="text-sm text-white/80">Стань лучшим игроком</div>
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white/80 transition-colors">Пользовательское соглашение</a>
                <a href="#" className="hover:text-white/80 transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-white/80 transition-colors">Контакты</a>
              </div>
              <div className="flex gap-4">
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="rounded-full"
                  onClick={() => window.open('https://vk.com/video-229092943_456239125', '_blank')}
                  title="VK Видео"
                >
                  <Icon name="Video" size={20} />
                </Button>
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="rounded-full"
                  onClick={() => window.open('https://t.me/your_channel', '_blank')}
                  title="Telegram канал"
                >
                  <Icon name="Send" size={20} />
                </Button>
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="rounded-full"
                  onClick={() => window.open('https://t.me/your_chat', '_blank')}
                  title="Telegram чат"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-white/20 text-sm text-white/70">
              © 2024 Roblox-Cheat. Все права защищены.
            </div>
          </div>
        </footer>
      </div>

      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Вход в аккаунт</DialogTitle>
            <DialogDescription>
              Войди чтобы получить доступ к своим покупкам
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="login-username">Никнейм</Label>
              <Input id="login-username" type="text" placeholder="твой_ник" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Пароль</Label>
              <Input id="login-password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary">
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Нет аккаунта? <button onClick={() => { setLoginOpen(false); setRegisterOpen(true); }} className="text-primary hover:underline">Зарегистрируйся</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Регистрация</DialogTitle>
            <DialogDescription>
              Создай аккаунт чтобы покупать и управлять подписками
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="register-username">Никнейм</Label>
              <Input id="register-username" type="text" placeholder="придумай_ник" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-password">Пароль</Label>
              <Input id="register-password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-email">Почта</Label>
              <Input id="register-email" type="email" placeholder="твой@email.ru" />
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Зарегистрироваться
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Уже есть аккаунт? <button onClick={() => { setRegisterOpen(false); setLoginOpen(true); }} className="text-primary hover:underline">Войти</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Демонстрация возможностей</DialogTitle>
            <DialogDescription>
              Смотри как работает Roblox-Cheat на практике
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Play" size={40} className="text-primary ml-1" />
              </div>
              <div className="text-lg font-semibold">Здесь будет видео демонстрация</div>
              <p className="text-sm text-muted-foreground">Пока видео в разработке 🎬</p>
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary" onClick={() => {
              setDemoOpen(false);
              setPurchaseOpen(true);
            }}>
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Хочу купить!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={purchaseOpen} onOpenChange={setPurchaseOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Оформление покупки</DialogTitle>
            <DialogDescription>
              Выбери период и оплати доступ к читу
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div>
              <Label className="text-base mb-3 block">Период подписки:</Label>
              <Slider
                value={[subscriptionPeriod]}
                onValueChange={(value) => setSubscriptionPeriod(value[0])}
                max={4}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                {periods.map((p, i) => (
                  <span key={i} className={i === subscriptionPeriod ? 'text-primary font-semibold' : ''}>
                    {p.label.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">{periods[subscriptionPeriod].label}</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                {getOldPrice(subscriptionPeriod) > 0 && (
                  <div className="text-xl font-bold text-muted-foreground line-through">
                    {getOldPrice(subscriptionPeriod)}₽
                  </div>
                )}
                <div className="text-4xl font-bold text-primary">
                  {calculatePrice(subscriptionPeriod)}₽
                </div>
              </div>
              {getDiscount(subscriptionPeriod) > 0 && (
                <Badge className="bg-gradient-to-r from-accent to-orange-400 text-white border-0">
                  🔥 Скидка {getDiscount(subscriptionPeriod)}%
                </Badge>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="purchase-email">Email для отправки доступа</Label>
              <Input id="purchase-email" type="email" placeholder="твой@email.ru" />
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Оплатить {calculatePrice(subscriptionPeriod)}₽
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              После оплаты инструкция придёт на email
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}