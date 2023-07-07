import type { Meta, StoryObj } from '@storybook/react';

import BedOutlined from '../../lib/search/BedOutlined';

const meta: Meta<typeof BedOutlined> = {
  component: BedOutlined,
  tags: ['autodocs'],
  title: 'search/BedOutlined',
};

export default meta;
type Story = StoryObj<typeof BedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
