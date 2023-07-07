import type { Meta, StoryObj } from '@storybook/react';

import MenuBookOutlined from '../../lib/maps/MenuBookOutlined';

const meta: Meta<typeof MenuBookOutlined> = {
  component: MenuBookOutlined,
  tags: ['autodocs'],
  title: 'maps/MenuBookOutlined',
};

export default meta;
type Story = StoryObj<typeof MenuBookOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
