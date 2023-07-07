import type { Meta, StoryObj } from '@storybook/react';

import PlumbingOutlined from '../../lib/maps/PlumbingOutlined';

const meta: Meta<typeof PlumbingOutlined> = {
  component: PlumbingOutlined,
  tags: ['autodocs'],
  title: 'maps/PlumbingOutlined',
};

export default meta;
type Story = StoryObj<typeof PlumbingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
