import type { Meta, StoryObj } from '@storybook/react';

import ChairAltOutlined from '../../lib/search/ChairAltOutlined';

const meta: Meta<typeof ChairAltOutlined> = {
  component: ChairAltOutlined,
  tags: ['autodocs'],
  title: 'search/ChairAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ChairAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
