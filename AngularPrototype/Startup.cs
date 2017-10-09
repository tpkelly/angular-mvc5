using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularPrototype.Startup))]
namespace AngularPrototype
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
