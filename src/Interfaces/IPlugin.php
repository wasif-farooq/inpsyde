<?php
namespace Sonsor\Inpsyde\Interfaces;


interface IPlugin
{
    public function action(string $hook, $func): void;

    public function getTemplate( string $template ): string;

    public function init(): void;

    public function variables( array $variables): array;

    public function template( string $template ): string;

    public function hook(): void;
}