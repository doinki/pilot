import type { Meta, StoryObj } from '@storybook/react';

import NavigationOutlined from '../../lib/maps/NavigationOutlined';

const meta: Meta<typeof NavigationOutlined> = {
  component: NavigationOutlined,
  tags: ['autodocs'],
  title: 'maps/NavigationOutlined',
};

export default meta;
type Story = StoryObj<typeof NavigationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
