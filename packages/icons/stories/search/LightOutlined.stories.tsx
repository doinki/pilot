import type { Meta, StoryObj } from '@storybook/react';

import LightOutlined from '../../lib/search/LightOutlined';

const meta: Meta<typeof LightOutlined> = {
  component: LightOutlined,
  tags: ['autodocs'],
  title: 'search/LightOutlined',
};

export default meta;
type Story = StoryObj<typeof LightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
