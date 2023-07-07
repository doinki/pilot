import type { Meta, StoryObj } from '@storybook/react';

import BackpackOutlined from '../../lib/places/BackpackOutlined';

const meta: Meta<typeof BackpackOutlined> = {
  component: BackpackOutlined,
  tags: ['autodocs'],
  title: 'places/BackpackOutlined',
};

export default meta;
type Story = StoryObj<typeof BackpackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
