import type { Meta, StoryObj } from '@storybook/react';

import KitesurfingOutlined from '../../lib/social/KitesurfingOutlined';

const meta: Meta<typeof KitesurfingOutlined> = {
  component: KitesurfingOutlined,
  tags: ['autodocs'],
  title: 'social/KitesurfingOutlined',
};

export default meta;
type Story = StoryObj<typeof KitesurfingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
