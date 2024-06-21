<?php


// app/Http/Controllers/ProductoController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = DB::table('productos')
            ->select('id', 'nombre', 'precio', 'imagen')
            ->where('activo', 1)
            ->get();

        return response()->json($productos);
    }
}
?>
