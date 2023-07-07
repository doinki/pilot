import type { Meta, StoryObj } from '@storybook/react';

import NoCellOutlined from '../../lib/places/NoCellOutlined';

const meta: Meta<typeof NoCellOutlined> = {
  component: NoCellOutlined,
  tags: ['autodocs'],
  title: 'places/NoCellOutlined',
};

export default meta;
type Story = StoryObj<typeof NoCellOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
