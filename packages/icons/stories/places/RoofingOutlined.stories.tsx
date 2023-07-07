import type { Meta, StoryObj } from '@storybook/react';

import RoofingOutlined from '../../lib/places/RoofingOutlined';

const meta: Meta<typeof RoofingOutlined> = {
  component: RoofingOutlined,
  tags: ['autodocs'],
  title: 'places/RoofingOutlined',
};

export default meta;
type Story = StoryObj<typeof RoofingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
