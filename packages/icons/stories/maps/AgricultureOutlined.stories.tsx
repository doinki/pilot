import type { Meta, StoryObj } from '@storybook/react';

import AgricultureOutlined from '../../lib/maps/AgricultureOutlined';

const meta: Meta<typeof AgricultureOutlined> = {
  component: AgricultureOutlined,
  tags: ['autodocs'],
  title: 'maps/AgricultureOutlined',
};

export default meta;
type Story = StoryObj<typeof AgricultureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
