import type { Meta, StoryObj } from '@storybook/react';

import LaptopChromebookOutlined from '../../lib/hardware/LaptopChromebookOutlined';

const meta: Meta<typeof LaptopChromebookOutlined> = {
  component: LaptopChromebookOutlined,
  tags: ['autodocs'],
  title: 'hardware/LaptopChromebookOutlined',
};

export default meta;
type Story = StoryObj<typeof LaptopChromebookOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
