import type { Meta, StoryObj } from '@storybook/react';

import BedroomBabyOutlined from '../../lib/search/BedroomBabyOutlined';

const meta: Meta<typeof BedroomBabyOutlined> = {
  component: BedroomBabyOutlined,
  tags: ['autodocs'],
  title: 'search/BedroomBabyOutlined',
};

export default meta;
type Story = StoryObj<typeof BedroomBabyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
