'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { InputNumber, Button, message, Table, Spin, Result, Tooltip, Radio, Tag, Popover, Avatar, Space } from 'antd';
import { useTheme } from "next-themes";

export default function PricingPage() {
	const { theme, setTheme } = useTheme();
	console.log(theme);

	return (
		<Card className="max-w-[400px]">
			<CardHeader className="flex gap-3">
				<div className="flex flex-col">
				<p className="text-md">Jeu Pierre-Papier-Ciseaux</p>
				</div>
			</CardHeader>
			<Divider/>
			<CardBody style={{textAlign: 'center'}}>
				<Radio.Group
					style={{ 
						marginBottom: 16, width: '100%'					
					}}
				>
					<Radio.Button value={1} style={{backgroundColor: theme === "light" ? "#FFFFFF" : "#3B3737"}}><p style={{color: theme === "light" ? "black" : "#FFFFFF"}}>Rock <Avatar src="https://symbl-world.akamaized.net/i/webp/f2/0e29d778af528ff18585b3c4088835.webp" size={18}/></p></Radio.Button>
					<Radio.Button value={2} style={{backgroundColor: theme === "light" ? "#FFFFFF" : "#3B3737"}}><p style={{color: theme === "light" ? "black" : "#FFFFFF"}}>Paper <Avatar src="https://symbl-world.akamaized.net/i/webp/77/ec9b6d839eb7a9868c98b397842442.webp" size={18}/></p></Radio.Button>
					<Radio.Button value={3} style={{backgroundColor: theme === "light" ? "#FFFFFF" : "#3B3737"}}><p style={{color: theme === "light" ? "black" : "#FFFFFF"}}>Scissors <Avatar src="https://symbl-world.akamaized.net/i/webp/c4/aa8b2a5d6d7304241d56de9f82e3d9.webp" size={18}/></p></Radio.Button>
				</Radio.Group>
				<InputNumber
					style={{
						backgroundColor: theme === "light" ? "#FFFFFF" : "#3B3737",
						borderColor: theme === "light" ? "#FFFFFF" : "#3B3737",
						color: theme === "light" ? "black" : "#FFFFFF",
						borderRadius: '5px'
					}}
					placeholder="Amount"
					inputMode="numeric"
					addonBefore={
						<Avatar src="https://nanswap.com/logo/XNO.svg" style={{ height: '80%' }} />
					}
					min={0}
					addonAfter={
						<Space>
						<Button size='small'><p style={{color: theme === "light" ? "black" : "#FFFFFF"}}>÷2</p></Button>
						<Button size='small'><p style={{color: theme === "light" ? "black" : "#FFFFFF"}}>×2</p></Button>
						<Button size='small'><p style={{color: theme === "light" ? "black" : "#FFFFFF"}}>Max</p></Button>
						</Space>
					}
				/>
			</CardBody>
			<Divider/>
			<CardFooter>
				<Link
				isExternal
				showAnchorIcon
				href="https://github.com/nextui-org/nextui"
				>
				Visit source code on GitHub.
				</Link>
			</CardFooter>
			</Card>
	);
}
