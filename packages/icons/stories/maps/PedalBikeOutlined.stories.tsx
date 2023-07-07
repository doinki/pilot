import type { Meta, StoryObj } from '@storybook/react';

import PedalBikeOutlined from '../../lib/maps/PedalBikeOutlined';

const meta: Meta<typeof PedalBikeOutlined> = {
  component: PedalBikeOutlined,
  tags: ['autodocs'],
  title: 'maps/PedalBikeOutlined',
};

export default meta;
type Story = StoryObj<typeof PedalBikeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
