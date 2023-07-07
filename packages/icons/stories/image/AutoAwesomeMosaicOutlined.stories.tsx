import type { Meta, StoryObj } from '@storybook/react';

import AutoAwesomeMosaicOutlined from '../../lib/image/AutoAwesomeMosaicOutlined';

const meta: Meta<typeof AutoAwesomeMosaicOutlined> = {
  component: AutoAwesomeMosaicOutlined,
  tags: ['autodocs'],
  title: 'image/AutoAwesomeMosaicOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoAwesomeMosaicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
