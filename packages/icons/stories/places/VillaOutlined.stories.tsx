import type { Meta, StoryObj } from '@storybook/react';

import VillaOutlined from '../../lib/places/VillaOutlined';

const meta: Meta<typeof VillaOutlined> = {
  component: VillaOutlined,
  tags: ['autodocs'],
  title: 'places/VillaOutlined',
};

export default meta;
type Story = StoryObj<typeof VillaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
