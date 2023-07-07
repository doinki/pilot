import type { Meta, StoryObj } from '@storybook/react';

import ChaletOutlined from '../../lib/places/ChaletOutlined';

const meta: Meta<typeof ChaletOutlined> = {
  component: ChaletOutlined,
  tags: ['autodocs'],
  title: 'places/ChaletOutlined',
};

export default meta;
type Story = StoryObj<typeof ChaletOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
