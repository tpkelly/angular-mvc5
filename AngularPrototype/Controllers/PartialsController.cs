using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class PartialsController : Controller
    {
        public ActionResult Form()
        {
            return View();
        }

        public ActionResult Step1()
        {
            return View();
        }

        public ActionResult Step2()
        {
            return View();
        }
    }
}