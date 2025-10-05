<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
  {services.map((service, index) => (
    <Card
      key={index}
      className="service-card border-0 photo-shadow hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex flex-col flex-grow justify-between h-full">
        <CardHeader className="pb-4 flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <service.icon className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="text-2xl">{service.title}</CardTitle>
          </div>
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col justify-between mt-auto">
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>

          {service.external ? (
            <Button
              variant="outline"
              className="w-full group-hover:bg-accent group-hover:text-white transition-colors mt-auto"
              asChild
            >
              <a
                href="https://booking.appointy.com/en-US/enterpriseentertainm/bookings/calendar?sr=1111351"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="w-full group-hover:bg-accent group-hover:text-white transition-colors mt-auto"
              onClick={scrollToBooking}
            >
              Book Now
            </Button>
          )}
        </CardContent>
      </div>
    </Card>
  ))}
</div>
