<?php

namespace Database\Seeders;

use App\Models\Subcategories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubcategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcategories = [
            ['name' => 'JavaScript Frameworks', 'icon' => 'CircleHalf', 'slug' => 'javascript-frameworks', 'category_id' => 9], // Belongs to 'Frontend'
            ['name' => 'CSS Frameworks', 'icon' => 'PaintBrush', 'slug' => 'css-frameworks', 'category_id' => 9], // Belongs to 'Frontend'
            ['name' => 'UI Libraries', 'icon' => 'PuzzlePiece', 'slug' => 'ui-libraries', 'category_id' => 9], // Belongs to 'Frontend'
            ['name' => 'PHP Frameworks', 'icon' => 'Server', 'slug' => 'php-frameworks', 'category_id' => 2], // Belongs to 'Backend'
            ['name' => 'Python Frameworks', 'icon' => 'Python', 'slug' => 'python-frameworks', 'category_id' => 2], // Belongs to 'Backend'
            ['name' => 'Ruby Frameworks', 'icon' => 'Ruby', 'slug' => 'ruby-frameworks', 'category_id' => 2], // Belongs to 'Backend'
            ['name' => 'SQL Databases', 'icon' => 'Database', 'slug' => 'sql-databases', 'category_id' => 3], // Belongs to 'Database'
            ['name' => 'NoSQL Databases', 'icon' => 'Cloud', 'slug' => 'nosql-databases', 'category_id' => 3], // Belongs to 'Database'
            ['name' => 'Web Security', 'icon' => 'Shield', 'slug' => 'web-security', 'category_id' => 4], // Belongs to 'Security'
            ['name' => 'Network Security', 'icon' => 'Network', 'slug' => 'network-security', 'category_id' => 4], // Belongs to 'Security'
            ['name' => 'DevOps Tools', 'icon' => 'Cloud', 'slug' => 'devops-tools', 'category_id' => 5], // Belongs to 'DevOps'
            ['name' => 'Mobile Development', 'icon' => 'Tablet', 'slug' => 'mobile-development', 'category_id' => 6], // Belongs to 'Mobile'
            ['name' => 'Web Design', 'icon' => 'PaintBrush', 'slug' => 'web-design', 'category_id' => 7], // Belongs to 'Design'
        ];

        foreach ($subcategories as $subcategory) {
            Subcategories::create($subcategory);
        }
    }
}