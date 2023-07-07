import type { Meta, StoryObj } from '@storybook/react';

import WineBarOutlined from '../../lib/maps/WineBarOutlined';

const meta: Meta<typeof WineBarOutlined> = {
  component: WineBarOutlined,
  tags: ['autodocs'],
  title: 'maps/WineBarOutlined',
};

export default meta;
type Story = StoryObj<typeof WineBarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
