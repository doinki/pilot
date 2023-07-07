import type { Meta, StoryObj } from '@storybook/react';

import KingBedOutlined from '../../lib/social/KingBedOutlined';

const meta: Meta<typeof KingBedOutlined> = {
  component: KingBedOutlined,
  tags: ['autodocs'],
  title: 'social/KingBedOutlined',
};

export default meta;
type Story = StoryObj<typeof KingBedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
