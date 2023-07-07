import type { Meta, StoryObj } from '@storybook/react';

import MenuOutlined from '../../lib/navigation/MenuOutlined';

const meta: Meta<typeof MenuOutlined> = {
  component: MenuOutlined,
  tags: ['autodocs'],
  title: 'navigation/MenuOutlined',
};

export default meta;
type Story = StoryObj<typeof MenuOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
